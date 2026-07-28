import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  getSpaces,
} from "../../services/spaceService";

const Spaces = () => {
  const [spaces, setSpaces] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchSpaces();
  }, []);

  const fetchSpaces =
    async () => {
      try {
        const response =
          await getSpaces();

        setSpaces(
          response.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <DashboardLayout>
      <h1>
        Library Spaces
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="stats-grid">
          {spaces.map(
            (space) => (
              <div
                key={space.id}
                className="stat-card"
              >
                <h3>
                  {space.name}
                </h3>

                <p>
                  Location:
                  {" "}
                  {
                    space.location
                  }
                </p>

                <p>
                  Capacity:
                  {" "}
                  {
                    space.capacity
                  }
                </p>

                <p>
                  Status:
                  {" "}
                  {space.status}
                </p>
              </div>
            )
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Spaces;