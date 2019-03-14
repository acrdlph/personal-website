import React from 'react';

const seasons = [
  {
    id: 'challengechallenge',
    episodes: ['dA5S1PiUTds', 'EfSvMMoiwZM', 'AAW42MuFaHo', 'zHhcwBBOOUQ', 'ESb_HVRiUUw', '23FH8JcK7u0', '6e9IcAfEP4Y', 'y-f4k1U-qjI', 'hleY0W7WufA', 'NK88nur7C2w', 'aE6-lPkB4vk', 'mPHFmf9YzVU', 'lcCpUZxWBNE', 'CK1ElzFhZig', 'SaD9QsGEvro']},
  {
    id: 'publictransport30',
    episodes: ['OnTuZmKuhM0', 'dRctg1Xjh6E', 'Ozh-ccpI5gI', 'x4bw0ngniNQ', 'g_20BQD-AM8', '_wglDyMQsEE', 'YybCe8Nl4oY', 'GT6eU8cqCyY', 'SezoPDsYToI', 'oYtA6tKgJvc', 'S2KKvEAGyRQ', 'TRXoNXIVTYo', 'JOeOcYVWbfw', 'PabxxZZu7uk', 'y64KMDD4Vks', '4qnPtPPqVdY', '9gK0_kZD_XI', 'KkL3-uDoNpA', 'KlDlRcRAwCg', 'Lcbs8BxpYNA', 'q-4Pn_gu7Mo', '25tGV19LFKU', 'D5JPDeMVwo0', 'OHNX6JQ66CQ', 'ws3d2kHkdKw', 'QeKvukfNcAE', '_ZiNlTLYYvY', 'XQAdnGZasWU', 'B98LCdnJFrk', 'Sxns1tcCY0I']
  }
];


const youTube = (props) => {
    const season = seasons.find(el => el.id == props.match.params.seasonId)
    const episodes = season.episodes.map(el => <iframe width="416" height="234" src={`https://www.youtube.com/embed/${el}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>);
    return (
        <div style={{ width: '100%' }}>
          {episodes}       
        </div>
    )
}

export default youTube;