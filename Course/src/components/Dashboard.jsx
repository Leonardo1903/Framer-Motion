"use client";
import { BellIcon } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <header className="flex items-center justify-between border-b p-4">
          <h1 className="text-xl font-semibold text-black">Overview</h1>
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <BellIcon className="h-5 w-5" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>
        </header>

        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-4 shadow-sm">
              <div className="pb-2">
                <h3 className="text-sm font-medium text-gray-500">
                  Total Users
                </h3>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold text-black">2,543</div>
                  <div className="text-sm font-medium text-green-600">+12%</div>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Increased by 257 since last month
                </p>
              </div>
            </div>

            <div className="rounded-lg border p-4 shadow-sm">
              <div className="pb-2">
                <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold text-black">$45,257</div>
                  <div className="text-sm font-medium text-green-600">+8%</div>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Increased by $3,257 since last month
                </p>
              </div>
            </div>

            <div className="rounded-lg border p-4 shadow-sm">
              <div className="pb-2">
                <h3 className="text-sm font-medium text-gray-500">
                  Active Sessions
                </h3>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold text-black">1,325</div>
                  <div className="text-sm font-medium text-green-600">+5%</div>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Increased by 103 since yesterday
                </p>
              </div>
            </div>

            <div className="rounded-lg border p-4 shadow-sm">
              <div className="pb-2">
                <h3 className="text-sm font-medium text-gray-500">
                  Conversion Rate
                </h3>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold text-black">12.3%</div>
                  <div className="text-sm font-medium text-red-600">-2%</div>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Decreased by 1.8% since last week
                </p>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-lg border p-4 shadow-sm">
              <h3 className="text-lg font-medium text-black">User Activity</h3>
              <div className="flex h-[300px] items-center justify-center bg-gray-50">
                <p className="text-gray-400">Chart Placeholder</p>
              </div>
            </div>

            <div className="rounded-lg border p-4 shadow-sm">
              <h3 className="text-lg font-medium text-black">
                Revenue Overview
              </h3>
              <div className="flex h-[300px] items-center justify-center bg-gray-50">
                <p className="text-gray-400">Chart Placeholder</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-6">
            <div className="rounded-lg border p-4 shadow-sm">
              <h3 className="text-lg font-medium text-black">
                Recent Activity
              </h3>
              <div className="py-2">
                <p className="text-sm text-black">
                  User #1 performed an action
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
