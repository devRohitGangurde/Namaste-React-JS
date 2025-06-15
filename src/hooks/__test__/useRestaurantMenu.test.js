import { renderHook } from "@testing-library/react";
import useRestaurantMenu from "../useRestaurantMenu"; // adjust path if needed
import * as constants from "../../utils/constants"; // Import the WHOLE module
import { waitFor } from '@testing-library/react';

describe("useRestaurantMenu", () => {
  const mockResId = "12345";
  const mockAPIURL = "https://mocked-api-url.com";

  const mockResponse = {
    data: {
      name: "Test Restaurant",
      id: mockResId,
    },
  };

  beforeEach(() => {
    // Mock fetch globally
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    // Mock getMenuAPIURL to return a dummy URL
    jest.spyOn(constants, "getMenuAPIURL").mockImplementation(() => mockAPIURL);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches and returns restaurant info", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useRestaurantMenu(mockResId)
    );
    // Wait until result.current is not null (i.e., data is fetched)
    await waitFor(() => {
      expect(result.current).not.toBeNull();
    });
    // Wait for the effect to run and data to load
    // await waitForNextUpdate();

    expect(fetch).toHaveBeenCalledWith(mockAPIURL);
    // expect(result.current).toEqual(mockResponse.data);
  });
});
