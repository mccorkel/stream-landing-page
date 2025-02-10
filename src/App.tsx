
import './App.css';

function App() {
  const appName = "stream.tigerpanda.tv";

  const androidVersions = [
    
    { version: "1.0.0", link: "https://expo.dev/artifacts/eas/uhhDYgDDEpcPZbZDE1y6cP.tar.gz" },
    // Add more Android versions as needed
  ];

  const iosVersions = [
    { version: "1.0.0", link: "https://expo.dev/artifacts/eas/tmsRpm6iNns7Jpb8UD7d9q.ipa" },
    // Add more iOS versions as needed
  ];

  return (
    <div className="app-container">
      <header>
        <h1>{appName}</h1>
      </header>

      <main>
        <section className="downloads">
          <h2>Android</h2>
          <table>
            <thead>
              <tr>
                <th>Version</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {androidVersions.map((v) => (
                <tr key={v.version}>
                  <td>{v.version}</td>
                  <td>
                    <a href={v.link} className="download-link">Download</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>iOS</h2>
          <table>
            <thead>
              <tr>
                <th>Version</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {iosVersions.map((v) => (
                <tr key={v.version}>
                  <td>{v.version}</td>
                  <td>
                    <a href={v.link} className="download-link">Download</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        {/* You can add a footer if needed */}
      </footer>
    </div>
  );
}

export default App;