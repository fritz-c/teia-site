import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { SectionTitle } from '../components/common';

const Container = styled.div`
  max-width: 700px;
  margin: 80px auto;
`;

const MyTh = styled.th`
  white-space: nowrap;
`;

const MyTd = styled.td`
  white-space: pre-wrap;
`;

const CompanyPage = () => (
  <Container>
    <SectionTitle>
      <FormattedMessage id="companyLink" />
    </SectionTitle>
    <table>
      {[
        'companyInfo.name',
        'companyInfo.created',
        'companyInfo.representative',
        'companyInfo.address1',
        'companyInfo.address2',
        'companyInfo.address3',
        'companyInfo.banks',
        'companyInfo.customers',
        'companyInfo.capital',
        'companyInfo.employeeCount',
      ].map(type => (
        <tr>
          <MyTh>
            <FormattedMessage id={`${type}Label`} />
          </MyTh>
          <MyTd>
            <FormattedMessage id={type} />
          </MyTd>
        </tr>
      ))}
    </table>
  </Container>
);

export default CompanyPage;
