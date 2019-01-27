import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { SectionTitle } from '../components/common';
import Layout from '../components/layout';
import shiseidoLogo from '../images/1_shiseido.png';
import kaoLogo from '../images/2_kao.png';
import merriesLogo from '../images/3_merries.png';
import laurierLogo from '../images/4_laurier.png';
import kobayashiSeiyakuLogo from '../images/5_kobayashi_seiyaku.png';
import unicharmLogo from '../images/6_unicharm.png';
import albionLogo from '../images/7_albion.png';
import skiiLogo from '../images/8_sk-ii.png';
import kaneboLogo from '../images/9_kanebo.png';
import hadabiseiLogo from '../images/10_hadabisei.png';
import wakodoLogo from '../images/11_wakodo.png';
import zojirushiLogo from '../images/12_zojirushi.png';

const MyDiv = styled.div`
  max-width: 700px;
  margin: 2rem auto 4rem auto;
  padding: 25px;
  background: #fef9f6;
`;
const LogoContainer = styled.div`
  text-align: center;
`;
const Logo = styled.img`
  max-width: 120px;
  margin: 10px;
`;

const PartnersPage = () => (
  <Layout>
    <MyDiv>
      <SectionTitle>
        <FormattedMessage id="partnersLink" />
      </SectionTitle>
      <LogoContainer>
        <Logo src={shiseidoLogo} alt="SHISEIDO" />
        <Logo src={kaoLogo} alt="KAO" />
        <Logo src={merriesLogo} alt="Merries メリーズ" />
        <Logo src={laurierLogo} alt="Laurier ロリエ" />
        <Logo src={kobayashiSeiyakuLogo} alt="小林製薬" />
        <Logo src={unicharmLogo} alt="unicharm" />
        <Logo src={albionLogo} alt="ALBION" />
        <Logo src={skiiLogo} alt="SK-II" />
        <Logo src={kaneboLogo} alt="Kanebo" />
        <Logo src={hadabiseiLogo} alt="肌美精 HADABISEI" />
        <Logo src={wakodoLogo} alt="WAKODO 和光堂" />
        <Logo src={zojirushiLogo} alt="ZOJIRUSHI" />
      </LogoContainer>
    </MyDiv>
  </Layout>
);

export default PartnersPage;
