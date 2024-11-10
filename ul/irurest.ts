/**
 * Logs an event with a given timestamp.
 *
 * @param {number} stamp - The current propagation timestamp.
 */
function logEvent(stamp) {
    console.log(`Event logged at timestamp: ${stamp}`);
}

// Example usage:
logEvent(Date.now());
