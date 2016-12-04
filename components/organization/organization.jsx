import React from 'react';
import Container from '../container/container';
import Contributors from '../contributors/contributors';
import Items from './projects.json';
import './organization-style';

let Shield = props => (
  <img src={
    `//img.shields.io/${props.content}.svg?label=${props.label}&style=flat-square&maxAge=3600` 
  } />
);

export default props => {
  return (
    <Container className="organization page__content">
      <h1>The Organization</h1>

      <p>A list of all commonly used projects in the webpack ecosystem.</p>

      <div className="organization__projects">
        {
          Items.map(org => (
            <div className="organization__project" key={ org.repo }>
              <a className="organization__title" href={ `https://github.com/${org.repo}` }>
                <h4>{ org.repo }</h4>
              </a>

              <p>Short description...</p>

              <h6>Downloads and Stars</h6>
              <Shield content={ `npm/dm/${org.npm}`} label="npm" />
              &nbsp;
              <Shield content={ `github/stars/${org.repo}` } label="*" />
              
              <h6>Activity</h6>
              <Shield 
                content={ `github/commits-since/${org.repo}/${encodeURIComponent("master@{6 months ago}")}` }
                label="6m" />
              &nbsp;
              <Shield 
                content={ `github/commits-since/${org.repo}/${encodeURIComponent("master@{3 months ago}")}` }
                label="3m" />
              &nbsp;
              <Shield 
                content={ `github/commits-since/${org.repo}/${encodeURIComponent("master@{1 month ago}")}` }
                label="1m" />
              &nbsp;
              <Shield 
                content={ `github/commits-since/${org.repo}/${encodeURIComponent("master@{1 week ago}")}` }
                label="1w" />
              
              <h6>Issues and PRs</h6>
              <Shield content={ `github/issues-raw/${org.repo}` } label="issues" />
              &nbsp;
              <Shield content={ `github/issues-pr-raw/${org.repo}` } label="prs" />
              
              <h6>Maintainers</h6>
              <Contributors contributors={[ org.maintainer ]} />
            </div>
          ))
        }
      </div>
    </Container>
  );
};
