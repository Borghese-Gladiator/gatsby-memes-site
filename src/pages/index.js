import React from 'react';
import MemeCard from '../components/MemeCard';

// util
function toTitleCase(str) {
  str = str.split('.').slice(0, -1).join('.') // remove filename extension
  str = str.split("/").pop(); // remove substring before "/" (eg: ./blah.png => blah.png)
  str = str.replace(/[-_]/g, ' '); // replace _ with spaces
  // find spaces & make title case
  str = str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
  return str
  
}

const IndexPage = () => {
  const memesList = [];
  const req = require.context("../Memes", false, /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i);
  console.log(req.keys());
  req.keys().forEach(function (key) {
    // req(key);
    memesList.push({
      'name': toTitleCase(key),
      'path': req(key)
    })
  });

  return (
    <div style={{
      backgroundColor: '#ebd8b7',
      paddingLeft: 300,
      paddingRight: 300
    }}>
      <h1 align="center">MEMES PAGE</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {
          memesList.map((val, idx) => {
            const { name, path } = val;
            return (
              <div key={idx} style={{
                margin: '15px'  /* and that, will result in a 10px gap */
              }}>
                <MemeCard
                  name={name}
                  path={path}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default IndexPage;