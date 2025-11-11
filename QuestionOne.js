function minContainersRequired(shipments, container_limits) {
    // Step 1: We are finding the total number of units to be shipped
    let totalUnits = 0;
    for (let i = 0; i < shipments.length; i++) {
        totalUnits += shipments[i];
    }

    // Step 2: Sort container limits from largest to smallest
    container_limits.sort(function(a, b) {
        return b - a;
    });

    // Step 3: Start filling containers one by one
    let usedCapacity = 0;       // how much capacity we have used so far
    let containersUsed = 0;     // how many containers we used

    for (let i = 0; i < container_limits.length; i++) {
        // If we already filled all units, we can stop
        if (usedCapacity >= totalUnits) {``
            break;
        }

        // Use the next largest container
        usedCapacity += container_limits[i];
        containersUsed++;
    }

    // Step 4: Check if total capacity is enough
    if (usedCapacity < totalUnits) {
        // Not enough space even with all containers
        return -1;
    }

    // Step 5: Return the number of containers used
    return containersUsed;
}
const shipments = [10, 20, 30];
const container_limits = [15, 15, 20, 10];

const result = minContainersRequired(shipments, container_limits);
console.log("Minimum number of containers needed:", result);
