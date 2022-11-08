import os

import time



os.system("npx playwright test mailTesting.test.ts")

time.sleep(3)

print("dusted")

os.system("npx playwright test OneDrive.test.ts")