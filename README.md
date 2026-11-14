# Shannon Mitchell — Re-Elected DSBN Trustee

Thank-you website for Shannon Mitchell, Public School Board Trustee — District School Board of Niagara (Niagara Falls). Updated after her **October 26, 2026** re-election.

**Website:** [shannonmitchellfortrustee.com](https://shannonmitchellfortrustee.com)

**Campaign reference:** See [CAMPAIGN_REFERENCE.md](./CAMPAIGN_REFERENCE.md) for bio, messaging, branding, Instagram research, and source material.

## Result (official)

| Candidate | Votes | Share |
|-----------|------:|------:|
| **Shannon Mitchell** *(elected)* | **9,475** | **35.03%** |
| Todd Bright *(elected)* | 5,866 | 21.69% |
| Helga Campbell | 5,744 | 21.24% |
| Zach Maves | 4,433 | 16.39% |
| Ravneet Girn | 1,528 | 5.65% |

Source: [City of Niagara Falls election results](https://niagarafalls.ca/city-government/elections/election-results/)

## About

Static HTML, CSS, and JavaScript site built from official Mitchell 2026 branding. Post-election messaging leads with gratitude and results; record and priorities remain. No build step — upload the files to any web host.

## Local preview

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Project structure

```
├── index.html              # Main page (thank-you / re-elected)
├── css/styles.css          # Mitchell 2026 brand styles
├── js/main.js              # Navigation, scroll animations, result counts
├── CAMPAIGN_REFERENCE.md   # Research, messaging, and source notes
├── assets/
│   ├── favicon.svg
│   ├── instagram-posts.json
│   └── images/
│       ├── shannon-0.jpeg          # Headshot (from campaign PDF)
│       ├── campaign-sign-page.png  # Sign artwork (from campaign PDF)
│       └── instagram/              # Community photos from @shannonmitchellnf
```

## Brand colors

| Color   | Hex       | Usage              |
|---------|-----------|--------------------|
| Orange  | `#F16538` | Primary accent     |
| Navy    | `#203F4A` | Text, dark sections|
| Yellow  | `#FEC720` | Highlights         |
| Cream   | `#F8F4E8` | Background         |
| Rust    | `#C6401A` | Hover states       |

Fonts: **Roboto Black** (headings), **Roboto Regular** (body) — loaded via Google Fonts.

## License

Campaign materials © Shannon Mitchell Campaign. All rights reserved.
