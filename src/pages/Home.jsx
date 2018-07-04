import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import $ from 'jquery';

import Em2017BrasilTemMenorInflacaoEmDuasDecadas from './contents/Em2017BrasilTemMenorInflacaoEmDuasDecadas';
import GovernoPropoeSalarioMinimoDe1002Para2019 from './contents/GovernoPropoeSalarioMinimoDe1002Para2019';
import PIBDe1ETomadaDoCrescimentoAposAMaiorRecessaoEm20Anos from './contents/PIBDe1ETomadaDoCrescimentoAposAMaiorRecessaoEm20Anos';
import ModernizacaoTrabalhistaNovosContratosEsquentamOMercadoDeTrabalho from './contents/ModernizacaoTrabalhistaNovosContratosEsquentamOMercadoDeTrabalho';
import DepoimentoPresidenteDaCaixa from './contents/DepoimentoPresidenteDaCaixa';
import MaisDe204MilVagasComCarteiraAssinadaForamCriadasEm2018 from './contents/MaisDe204MilVagasComCarteiraAssinadaForamCriadasEm2018';
import TaxaBasicaDeJurosEReduzidaA65AMenorDaHistoria from './contents/TaxaBasicaDeJurosEReduzidaA65AMenorDaHistoria';
import ComLeiDeGovernanca from './contents/ComLeiDeGovernanca';
import SaquesDasContasInativas from './contents/SaquesDasContasInativas';
import SaquesDoPispasepBeneficiam from './contents/SaquesDoPispasepBeneficiam';
import FiesTera350Mil from './contents/FiesTera350Mil';
import AgriculturaFamiliarRecebe from './contents/AgriculturaFamiliarRecebe';
import BrasilTemRecordeDeProducao from './contents/BrasilTemRecordeDeProducao';
import BrasilEOSegundoProdutor from './contents/BrasilEOSegundoProdutor';
import RecordeDeBolsasOfertas from './contents/RecordeDeBolsasOfertas';
import DiscutidoHaMaisDe20Anos from './contents/DiscutidoHaMaisDe20Anos';
import LeiloesDeEnergiaAtraemBilhoes from './contents/LeiloesDeEnergiaAtraemBilhoes';
import ProgramaMaisAlfabetizacao from './contents/ProgramaMaisAlfabetizacao';
import SaldoDaBalancaComercial from './contents/SaldoDaBalancaComercial';
import BrasilTemSafraRecorde from './contents/BrasilTemSafraRecorde';
import SAMU192Tem65DaSuaFrotaRenovadaEmDoisAnos from './contents/SAMU192Tem65DaSuaFrotaRenovadaEmDoisAnos';
import NumeroDeConsultasNasUbs from './contents/NumeroDeConsultasNasUbs';
import CasosDeDengueZikaEChicungunyaSaoReduzidos from './contents/CasosDeDengueZikaEChicungunyaSaoReduzidos';
import CoberturaDosPlanosDeSaudeEAmpliada from './contents/CoberturaDosPlanosDeSaudeEAmpliada';
import DecretoAsseguraTransporteDeOrgaosPelaFab from './contents/DecretoAsseguraTransporteDeOrgaosPelaFab';
import CompraDeMedicamentosTemReforcoDeR80Milhoes from './contents/CompraDeMedicamentosTemReforcoDeR80Milhoes';
import CartaoReformaR685MilhoesParaRenovarMoradias from './contents/CartaoReformaR685MilhoesParaRenovarMoradias';
import GestaoEficienteGeraEconomiaParaAPopulacao from './contents/GestaoEficienteGeraEconomiaParaAPopulacao';
import TetoDosGastos from './contents/TetoDosGastos';
import BolsaFamiliaTemAumentoNoBeneficioEFilaZerada from './contents/BolsaFamiliaTemAumentoNoBeneficioEFilaZerada';
import MinhaCasaMinhaVida793MilUnidadesEm20Meses from './contents/MinhaCasaMinhaVida793MilUnidadesEm20Meses';
import RecordeNaEmissaoDeTitulosDePropriedadeEm2017 from './contents/RecordeNaEmissaoDeTitulosDePropriedadeEm2017';
import EntregaRecordeDeTitulosDaReformaAgraria from './contents/EntregaRecordeDeTitulosDaReformaAgraria';
import RioMaisSeguroComIntervencaoFederal from './contents/RioMaisSeguroComIntervencaoFederal';
import GovernoReforcaOperacoesNaFaixaDeFronteira from './contents/GovernoReforcaOperacoesNaFaixaDeFronteira';
import QuaseDuasFrancasDeUnidadesDeConservacaoCriadas from './contents/QuaseDuasFrancasDeUnidadesDeConservacaoCriadas';
import IdJovemAmpliaAcessoACulturaDe500MilJovens from './contents/IdJovemAmpliaAcessoACulturaDe500MilJovens';
import IntegracaoDoSaoFranciscoMaisVidaNoNordeste from './contents/IntegracaoDoSaoFranciscoMaisVidaNoNordeste';

// matérias novas
import ProducaoVeiculosVoltaCrescer from './contents/ProducaoVeiculosVoltaCrescer';
import Apos20AnosDisputa from './contents/Apos20AnosDisputa';
import BrasilAmpliaSeuParque from './contents/BrasilAmpliaSeuParque';
import MesmoComOperacaoCarneFraca from './contents/MesmoComOperacaoCarneFraca';
import ComVacinacaoBrasilRecebeCertificado from './contents/ComVacinacaoBrasilRecebeCertificado';
import PlanoAgroModerniza from './contents/PlanoAgroModerniza';
import NovaGradeCurricularUnifica from './contents/NovaGradeCurricularUnifica';
import ProgramaMedioTecPermite from './contents/ProgramaMedioTecPermite';
import GovernoInvesteNaFormacao from './contents/GovernoInvesteNaFormacao';
import GovernoAmpliaParticipacao from './contents/GovernoAmpliaParticipacao';
import GovernoAmpliaInvestimento from './contents/GovernoAmpliaInvestimento';
import RepassesNaSaudeGanhamReforco from './contents/RepassesNaSaudeGanhamReforco';
import GovernoHabilitaUpas from './contents/GovernoHabilitaUpas';
import GovernoInvesteEmTesteRapido from './contents/GovernoInvesteEmTesteRapido';
import GovernoAdquireRepelentesParaGestante from './contents/GovernoAdquireRepelentesParaGestante';
import ReajusteNoPrecoMedioDeMedicamento from './contents/ReajusteNoPrecoMedioDeMedicamento';
import GovernoOfereceMelhorTratamento from './contents/GovernoOfereceMelhorTratamento';
import CartoriosDeTodoOBrasilPoderaoEmitir from './contents/CartoriosDeTodoOBrasilPoderaoEmitir';
import NovoFormatoDaCarteiraDeHabilitacao from './contents/NovoFormatoDaCarteiraDeHabilitacao';
import GovernoLancaDocumentosDigitais from './contents/GovernoLancaDocumentosDigitais';
import GovernoAcataConselhao from './contents/GovernoAcataConselhao';
import TaxigovGeraReducaoDeCustos from './contents/TaxigovGeraReducaoDeCustos';

import MultasAmbientaisViramInvestimento from './contents/MultasAmbientaisViramInvestimento';
import PfBateRecordeHistoricoDeApreensaoDeDrogas from './contents/PfBateRecordeHistoricoDeApreensaoDeDrogas';
import NovasRegrasPagamento from './contents/NovasRegrasPagamento';
import DepoimentoMinistroDireitosHumanos from './contents/DepoimentoMinistroDireitosHumanos';
import DepoimentoMinistroTurismo from './contents/DepoimentoMinistroTurismo';
import BrasilMaisTurismo from './contents/BrasilMaisTurismo';
import AvancarAlavancaCrescimento from './contents/AvancarAlavancaCrescimento';
import DepoimentoMinistroIndustriaComercioExteriorServicos from './contents/DepoimentoMinistroIndustriaComercioExteriorServicos';
import DepoimentoMinistroMinasEnergia from './contents/DepoimentoMinistroMinasEnergia';
import DepoimentoMinistroDaFazenda from './contents/DepoimentoMinistroDaFazenda';
import MedicamentosReajustadosAbaixoInflacao from './contents/MedicamentosReajustadosAbaixoInflacao';
import DepoimentoMinistroEducacao from './contents/DepoimentoMinistroEducacao';
import ReformaAdministrativa from './contents/ReformaAdministrativa';
import PlataformaDeServicos from './contents/PlataformaDeServicos';
import CriancaFeliz from './contents/CriancaFeliz';
import MelhoriasParaOBPC from './contents/MelhoriasParaOBPC';
import ComProgredirFamiliasGanhamAutonomia from './contents/ComProgredirFamiliasGanhamAutonomia';
import InternetParaTodos from './contents/InternetParaTodos';
import MordenizaAgronegocioBrasileiro from './contents/MordenizaAgronegocioBrasileiro';
import BrasilRatificaAcordoDeParis from './contents/BrasilRatificaAcordoDeParis';
import AmazoniaLegal from './contents/AmazoniaLegal';
import SaneamentoBasicoAPopulacao from './contents/SaneamentoBasicoAPopulacao';
import AcordoImpulsionamBrasilExterior from './contents/AcordoImpulsionamBrasilExterior';
import NovoChico from './contents/NovoChico';
import AeroportosRegionaisRecebem from './contents/AeroportosRegionaisRecebem';
import MulheresPoderaoChegarAoComandoExercito from './contents/MulheresPoderaoChegarAoComandoExercito';
import CaisDoValongoPatrimonioMundial from './contents/CaisDoValongoPatrimonioMundial';
import ComiteCoordenarMigracao from './contents/ComiteCoordenarMigracao';
import LeiRouanetAperfeicoada from './contents/LeiRouanetAperfeicoada';
import BrasilEChinaAssinamAcordo from './contents/BrasilEChinaAssinamAcordo';
import AlertaDeRiscoPorSMS from './contents/AlertaDeRiscoPorSMS';
import TuristasGastamSomaRecorde from './contents/TuristasGastamSomaRecorde';
import CinemaNacionalBateRecorde from './contents/CinemaNacionalBateRecorde';
import BrasilRegistraRecordeDeTuristas from './contents/BrasilRegistraRecordeDeTuristas';
import SegundoTempoBeneficia from './contents/SegundoTempoBeneficia';
import EconomiaBrasileiraAvancaNoMundo from './contents/EconomiaBrasileiraAvancaNoMundo';
import ComercioExteriorImpulsionado from './contents/ComercioExteriorImpulsionado';
import BrasilSuperaMetaOnu from './contents/BrasilSuperaMetaOnu';
import MaisTurismoECultura from './contents/MaisTurismoECultura';
import ParquesNacionaisTemRecordeDeVisitacao from './contents/ParquesNacionaisTemRecordeDeVisitacao';
import EVisaAumentaTurismo from './contents/EVisaAumentaTurismo';
import PronatecTurismoOferece from './contents/PronatecTurismoOferece';
import EsporteECidadania from './contents/EsporteECidadania';
import BolsaAtleta2017 from './contents/BolsaAtleta2017';
import ForcasNoEsporte from './contents/ForcasNoEsporte';

// import afogado from '../assets/videos/AFOGADO.mp4';
// import afogadoMobile from '../assets/videos/afogados_mobile.mp4';

import vertical from '../assets/img/vertical.png';

import logoBranco from '../assets/img/logo-branco.png';
import logoBranco2 from '../assets/img/logo-branco@2x.png';
import logoBranco3 from '../assets/img/logo-branco@3x.png';

import sharePreto from '../assets/img/share-preto.png';
import sharePreto2 from '../assets/img/share-preto@2x.png';
import sharePreto3 from '../assets/img/share-preto@3x.png';

import logoColor from '../assets/img/logo-color.png';
import logoColor2 from '../assets/img/logo-color@2x.png';
import logoColor3 from '../assets/img/logo-color@3x.png';

import logoRodape from '../assets/img/logo-rodape.png';
import logoRodape2 from '../assets/img/logo-rodape@2x.png';
import logoRodape3 from '../assets/img/logo-rodape@3x.png';


/* 
import  from '../assets/img/.png';
import  from '../assets/img/@2x.png';
import  from '../assets/img/@3x.png';
 */


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: ''
        }
    }
    componentDidMount() {
        setTimeout(() => {
            window.initScript();
        }, 200);
        this.loadVideo();
        // window.historyProp = this.props.history;
        
    }
    loadVideo() {
        this.setState({
            video: ($(window).width() < 1000) ? 'static/videos/afogados_mobile.mp4' : 'static/videos/afogados.mp4'
        });
    }
    openModal = (event) => {
        let _id = $(event.target).parents('.picture-item').attr('id');

        // _id = (_id) ? _id : $('.base').data('page');
        // console.log('error aki', $('.base').data('page'));
        if(_id) {
            setTimeout(() => {
                this.props.history.push(`/${_id}`);
            }, 1000);
        }

    }
    render() {
        return (
            <div className="base" data-page={this.props.location.pathname}>
                <div id="fullpage" >
                    <div id="container2" className="container-white wrapper">
                        <div className="videoloop">
                            <header className="topo-logo">
                                <div className="topo-marca">
                                    <img alt="" src={logoBranco} srcSet={`${logoBranco2} 2x, ${logoBranco3} 3x`} className="gov-br " />
                                </div>

                                <div className="topo-links">
                                    <a href="documentos/balanco.pdf" target="_blank">Balanço de Governo</a>
                                </div>

                                <div className="topo-share">
                                    <img alt="" src={sharePreto} srcSet={`${sharePreto2} 2x, ${sharePreto3} 3x`} className="logo share-top share" />

                                    <div className=" topo-icons">
                                        <div className="top-menu facebook facebook-share-top" style={{display: 'none'}}>
                                            <br />
                                            <img alt="" src="static/images/ic-facebook.png" srcSet={`static/images/ic-facebook@2x.png 2x, static/images/ic-facebook@3x.png 3x`} className="logo share facebook-icon" />
                                        </div>

                                        <br />

                                        <div className="top-menu twitter twitter-share-top" style={{display: 'none'}}>
                                            <img alt="" src="static/images/ic-twitter.png" srcSet="static/images/ic-twitter@2x.png 2x, static/images/ic-twitter@3x.png 3x" className="logo share twitter-icon" />
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </header>
                        </div>

                        <video autoPlay muted loop id="myVideo">
                            <source type='video/mp4' src={this.state.video} />
                            {/* <source src={afogadoMobile} type="video/mp4" media="all and (max-width: 1000px)" />
                            <source src={afogado} type="video/mp4" /> */}
                        </video>
                        <div id="slideshow">
                            <h4 className="slideshow-element">Saímos da recessão</h4>
                            <h4 className="slideshow-element">O Brasil voltou a respirar</h4>
                            <h4 className="slideshow-element">No fundo, você sabe que melhorou</h4>
                        </div>
                        <div id="scroll-first" className="scroll-first scroll">
                            <div>
                                <img alt="" className="vertical hide" src={vertical} />
                            </div>
                            <div className="icon-scroll">
                            </div>

                            <br />

                            <span className="smaller-title-text">
                                ROLE PARA BAIXO
                            </span>
                        </div>
                    </div>

                    <div id="site-content">
                        <div id="container" className="wrapper container collapsed">
                            <div id="top-site-text" className="top-site-text capa-paroller">
                                <div>
                                    <div className="top-menu">
                                        <header className="topo-logo">
                                            <div className="topo-marca">
                                                <img alt="" src={logoColor} srcSet={`${logoColor2} 2x, ${logoColor3} 3x`} className="gov-br" />
                                            </div>

                                            <div className="topo-links">
                                                <a href="documentos/balanco.pdf" target="_blank" style={{ color: 'black' }}>Balanço de Governo</a>
                                            </div>

                                            <div className="topo-share">
                                                <img alt="" src={sharePreto} srcSet={`${sharePreto2} 2x, ${sharePreto3} 3x`} className="share-top share" />
                                                <div className="topo-icons">

                                                    <div className="top-menu facebook facebook-share-top" style={{display: 'none'}}>
                                                        <br />
                                                        <img alt="" src="static/images/ic-facebook.png" srcSet="static/images/ic-facebook@2x.png 2x, static/images/ic-facebook@3x.png 3x" className="share facebook-icon" />
                                                    </div>

                                                    <br />

                                                    <div className="top-menu twitter twitter-share-top" style={{display: 'none'}}>
                                                        <img alt="" src="static/images/ic-twitter.png" srcSet="static/images/ic-twitter@2x.png 2x, static/images/ic-twitter@3x.png 3x" className="share twitter-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                        </header>
                                    </div>
                                </div>
                            </div>

                            <br />

                            <div>
                                <span className="bigger-title-text"> Avançamos.</span>
                            </div>

                            <br /><br />

                            <div>
                                <img alt="" src={vertical} className="vertical hide" />
                            </div>

                            <br />

                            <div id="scroll-to-page" className="scroll">
                                <div>
                                    <img alt="" src={vertical} className="vertical hide" />
                                </div>
                                <div className="icon-scroll scroll-margin logo">
                                </div>

                                <br />
                                <span className="smaller-title-text">
                                    ROLE PARA BAIXO
                                </span>
                            </div>
                        </div>

                        <div className="container navigation">
                            <NavLink exact to="/" activeClassName="button-active" id="todos" className="button" shuffle="Todos">Todos</NavLink>
                            <NavLink to="/economia" activeClassName="button-active" id="economia" className="button" shuffle="economia">Economia</NavLink>
                            <NavLink to="/meio-ambiente" activeClassName="button-active" id="meio-ambiente" className="button" shuffle="meio-ambiente">Meio Ambiente</NavLink>
                            <NavLink to="/cultura" activeClassName="button-active" id="cultura" className="button" shuffle="cultura">Cultura</NavLink>
                            <NavLink to="/gestao" activeClassName="button-active" id="gestao" className="button" shuffle="gestao">Gestão</NavLink>
                            <NavLink to="/social" activeClassName="button-active" id="social" className="button" shuffle="social">Social</NavLink>
                            <NavLink to="/seguranca-e-defesa" activeClassName="button-active" id="seguranca-e-defesa" className="button" shuffle="seguranca-e-defesa">Seguranca e Defesa</NavLink>
                        </div>

                        <div id="shuffle-container" className="shuffle-container">

                            {/* 1 - Matéria 1 Economia */}

                            <div onClick={this.openModal.bind(this)} to="em-2017-brasil-tem-menor-inflacao-em-duas-decadas" id="em-2017-brasil-tem-menor-inflacao-em-duas-decadas" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-one">
                                        Inflação de 2,95% em 2017 é a <strong>menor</strong> em 20 anos
                                    </div>

                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/01-inflacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}em-2017-brasil-tem-menor-inflacao-em-duas-decadas`} component={Em2017BrasilTemMenorInflacaoEmDuasDecadas} />
                                    </div>
                                </div>
                            </div>
                            {/* 2-Matéria 4 Economia */}

                            <div onClick={this.openModal.bind(this)} to="governo-propoe-salario-minimo-de-1002-para-2019" id="governo-propoe-salario-minimo-de-1002-para-2019" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-two">
                                        <strong>salário mínimo de R$ 1.002 para 2019</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/02-salario-minimo.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-propoe-salario-minimo-de-1002-para-2019`} component={GovernoPropoeSalarioMinimoDe1002Para2019} />
                                    </div>
                                </div>
                            </div>

                            {/* 3 - Matéria 2 Economia */}

                            <div onClick={this.openModal.bind(this)} to="PIB-de-1-e-tomada-do-crescimento-apos-a-maior-recessao-em-20-anos" id="PIB-de-1-e-tomada-do-crescimento-apos-a-maior-recessao-em-20-anos" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_eight_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>País volta a crescer</strong> após dois anos de recessão
                                    </div>

                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/03-pais-volta-crescer.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}PIB-de-1-e-tomada-do-crescimento-apos-a-maior-recessao-em-20-anos`} component={PIBDe1ETomadaDoCrescimentoAposAMaiorRecessaoEm20Anos} />
                                    </div>
                                </div>
                            </div>

                            {/* 4 - Matéria 6 Economia */}

                            <div onClick={this.openModal.bind(this)} to="modernizacao-trabalhista-novos-contratos-esquentam-o-mercado-de-trabalho" id="modernizacao-trabalhista-novos-contratos-esquentam-o-mercado-de-trabalho" className="picture-item grayscale square-two-rows" tabIndex="0" data-groups='["social"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-two">
                                        Nova lei trabalhista <strong>beneficia criação de empregos</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/04-nova-lei-trabalhista.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}modernizacao-trabalhista-novos-contratos-esquentam-o-mercado-de-trabalho`} component={ModernizacaoTrabalhistaNovosContratosEsquentamOMercadoDeTrabalho} />
                                    </div>
                                </div>
                            </div>


                            {/* 5 - video 1 */}
                            <div onClick={this.openModal.bind(this)} to="depoimento-presidente-da-caixa" id="depoimento-presidente-da-caixa" className="picture-item grayscale square-two-rows-and-columns" tabIndex="0" data-groups='["todos"]'>
                                <div className="type_three type">
                                    <div className="thumb" id="depoimento1">
                                        <img alt="" className="column" src={require('../assets/img/thumb/05-video-entrevista1.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}depoimento-presidente-da-caixa`} component={DepoimentoPresidenteDaCaixa} />
                                    </div>
                                </div>
                            </div>


                            {/* 6 - Matéria 5 Economia */}

                            <div onClick={this.openModal.bind(this)} to="mais-de-204-mil-vagas-com-carteira-assinada-foram-criadas-em-2018" id="mais-de-204-mil-vagas-com-carteira-assinada-foram-criadas-em-2018" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-one">
                                        Postos de trabalho <strong>voltam a crescer</strong> em 2018
                                    </div>

                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/06-postos-de-trabalho.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}mais-de-204-mil-vagas-com-carteira-assinada-foram-criadas-em-2018`} component={MaisDe204MilVagasComCarteiraAssinadaForamCriadasEm2018} />
                                    </div>
                                </div>
                            </div>



                            {/* 8 - Matéria 3 Economia */}

                            <div onClick={this.openModal.bind(this)} to="taxa-basica-de-juros-e-reduzida-a-65-a-menor-da-historia" id="taxa-basica-de-juros-e-reduzida-a-65-a-menor-da-historia" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-one">
                                        Taxa de juros atinge 6,5%, <strong>a menor da história</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/08-taxa-de-juros-menor.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}taxa-basica-de-juros-e-reduzida-a-65-a-menor-da-historia`} component={TaxaBasicaDeJurosEReduzidaA65AMenorDaHistoria} />
                                    </div>
                                </div>
                            </div>

                            {/* 7 - Matéria 10 Economia */}

                            <div onClick={this.openModal.bind(this)} to="com-lei-de-governanca" id="com-lei-de-governanca" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Estatais têm lucro de <strong>R$ 28,4 bilhões em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/07-estatais-lucro.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}com-lei-de-governanca`} component={ComLeiDeGovernanca} />
                                    </div>
                                </div>
                            </div>
                            {/* 9 - Matéria 7 Economia */}

                            <div onClick={this.openModal.bind(this)} to="saques-das-contas-inativas" id="saques-das-contas-inativas" className="picture-item square-two-columns" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Saques de contas do FGTS somam <strong>R$ 44 bilhões</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/09-saque-fgts.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}saques-das-contas-inativas`} component={SaquesDasContasInativas} />
                                    </div>
                                </div>
                            </div>


                            {/* 10-Matéria 8 Economia */}

                            <div onClick={this.openModal.bind(this)} to="saques-do-pispasep-beneficiam" id="saques-do-pispasep-beneficiam" className="picture-item grayscale square-two-columns" tabIndex="0" data-groups='["energia"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Saques do PIS/Pasep injetam até R$ <strong>21 bi na economia</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/10-saque-pis.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}saques-do-pispasep-beneficiam`} component={SaquesDoPispasepBeneficiam} />
                                    </div>
                                </div>
                            </div>

                            {/* PRIMEIRA METADE DA LEVA */}
                            {/* <div id="video-afogados" className="picture-item grayscale alternate center" data-groups='["todos"]'> */}
                            {/* <img id="video" className="play-button play" src={require('')} src="../assets/img/thumb/afogados_thumb.jpg"> */}
                            <div id="video-relogio" className="picture-item alternate center" data-groups='["todos"]'>
                                <img alt="" className="play-button2 play" src={require('../assets/img/thumb/relogio_thumb.jpg')} />
                            </div>
                            {/* </div> */}

                            {/* 13 - Matéria 15 Energia */}

                            <div onClick={this.openModal.bind(this)} to="brasil-tem-recorde-de-producao" id="brasil-tem-recorde-de-producao" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Petróleo : <strong>Brasil bate recorde</strong> de produção em 2017
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/13-petroleo-recorde.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-tem-recorde-de-producao`} component={BrasilTemRecordeDeProducao} />
                                    </div>
                                </div>
                            </div>

                            {/* 14 - Matéria 18 Energia */}

                            <div onClick={this.openModal.bind(this)} to="brasil-e-o-segundo-produtor" id="brasil-e-o-segundo-produtor" className="picture-item grayscale square" tabIndex="0" data-groups='["energia"]'>
                                <div className="type_two type">
                                    <div className="float-title float-title-two">
                                        Brasil é o <strong>segundo produtor mundial</strong> de biodiesel
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/14-biodiesel.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-e-o-segundo-produtor`} component={BrasilEOSegundoProdutor} />
                                    </div>
                                </div>
                            </div>

                            {/* 15-Matéria 27 Educação */}

                            <div onClick={this.openModal.bind(this)} to="recorde-de-bolsas-ofertas" id="recorde-de-bolsas-ofertas" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_eight type">
                                    <div className="float-title float-title-one">
                                        ProUni cresce 10% e tem <strong>recorde de bolsas</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/15-prouni-recorde.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}recorde-de-bolsas-ofertas`} component={RecordeDeBolsasOfertas} />
                                    </div>
                                </div>
                            </div>


                            {/* 17-Matéria 24 Educação */}

                            <div onClick={this.openModal.bind(this)} to="discutido-ha-mais-de-20-anos" id="discutido-ha-mais-de-20-anos" className="picture-item square-two-rows" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title float-title-one">
                                        Novo Ensino Médio: <strong>educação do Brasil no século 21</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/17-novo-ensino-medio.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}discutido-ha-mais-de-20-anos`} component={DiscutidoHaMaisDe20Anos} />
                                    </div>
                                </div>
                            </div>

                            {/* 18 - Matéria 16 energia */}

                            <NavLink to="leiloes-de-energia-atraem-bilhoes" id="leiloes-de-energia-atraem-bilhoes" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-three">
                                        Leilões de energia atraem <strong>bilhões em investimentos</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/18-leiloes.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}leiloes-de-energia-atraem-bilhoes`} component={LeiloesDeEnergiaAtraemBilhoes} />
                                    </div>
                                </div>
                            </NavLink>


                            {/* 16 Matéria 29 Educação */}

                            <NavLink to="programa-mais-alfabetizacao" id="programa-mais-alfabetizacao" className="picture-item grayscale square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-one">
                                        R$ 523 milhões para o <strong>Programa Mais Alfabetização</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/16-alfabetizacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}programa-mais-alfabetizacao`} component={ProgramaMaisAlfabetizacao} />
                                    </div>
                                </div>
                            </NavLink>
                            {/* 20- Matéria 9 Economia */}

                            <NavLink to="saldo-da-balanca-comercial" id="saldo-da-balanca-comercial" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-four">
                                        Balança comercial tem <strong>recorde histórico em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/20-balanca-comercial.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}saldo-da-balanca-comercial`} component={SaldoDaBalancaComercial} />
                                    </div>
                                </div>
                            </NavLink>



                            {/* 19- Matéria 19 Agro */}

                            <NavLink to="brasil-tem-safra-recorde" id="brasil-tem-safra-recorde" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Brasil tem <strong>safras recordes</strong> e mais exportação
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/19-brasil-exportacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-tem-safra-recorde`} component={BrasilTemSafraRecorde} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* <div className="picture-item grayscale alternate" data-groups='["todos"]'> */}
                            {/* <img alt="" className="play-button play" src={require('')} src="../assets/img/thumb/video02.jpg"/> */}
                            {/* </div> */}

                            {/* FIM PRIMEIRA LEVA  */}

                            {/* INICIO SEGUNDA LEVA */}

                            {/* 21-Matéria 36 saude */}

                            <NavLink to="SAMU-192-tem-65-da-sua-frota-renovada-em-dois-anos" id="SAMU-192-tem-65-da-sua-frota-renovada-em-dois-anos" className="picture-item square-two-columns" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        <strong>SAMU 192</strong> tem 65% da sua frota renovada em dois anos
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/21-samu.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}SAMU-192-tem-65-da-sua-frota-renovada-em-dois-anos`} component={SAMU192Tem65DaSuaFrotaRenovadaEmDoisAnos} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 22 Matéria 33 saude */}
                            <NavLink to="numero-de-consultas-nas-ubs" id="numero-de-consultas-nas-ubs" className="picture-item grayscale square-two-columns" tabIndex="0" data-groups='["social"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        UBS:  <strong>gestão eficiente</strong> leva saúde para quem precisa
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/22-ubs-gestao-eficiente.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}numero-de-consultas-nas-ubs`} component={NumeroDeConsultasNasUbs} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* início-bloco */}

                            {/* 23-Matéria 38 saude */}

                            <NavLink to="casos-de-dengue-zika-e-chicungunya-sao-reduzidos" id="casos-de-dengue-zika-e-chicungunya-sao-reduzidos" className="picture-item grayscale square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-five">
                                        Casos de dengue, zika e chicungunya <strong>são reduzidos</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/23-casos-dengue.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}casos-de-dengue-zika-e-chicungunya-sao-reduzidos`} component={CasosDeDengueZikaEChicungunyaSaoReduzidos} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 24-Matéria 42 saude */}

                            <NavLink to="cobertura-dos-planos-de-saude-e-ampliada" id="cobertura-dos-planos-de-saude-e-ampliada" className="picture-item grayscale square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-three">
                                        Cobertura dos planos de saúde <strong>é ampliada</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/24-cobertura-planos-de-saude.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}cobertura-dos-planos-de-saude-e-ampliada`} component={CoberturaDosPlanosDeSaudeEAmpliada} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 25-Matéria 37 saude */}

                            <NavLink to="decreto-assegura-transporte-de-orgaos-pela-fab" id="decreto-assegura-transporte-de-orgaos-pela-fab" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_eigth-alt type">
                                    <div className="float-title-alt float-title-three">
                                        Decreto assegura <strong>transporte de órgãos pela FAB</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/25-transporte-fab.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}decreto-assegura-transporte-de-orgaos-pela-fab`} component={DecretoAsseguraTransporteDeOrgaosPelaFab} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 26- Matéria 43 saude */}

                            <NavLink to="compra-de-medicamentos-tem-reforco-de-R-80-milhoes" id="compra-de-medicamentos-tem-reforco-de-R-80-milhoes" className="picture-item grayscale square-two-rows" tabIndex="0" data-groups='["social"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-three">
                                        Compra de medicamentos tem <strong>reforço de R$ 80 milhões</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/26-compra-medicamentos.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}compra-de-medicamentos-tem-reforco-de-R-80-milhoes`} component={CompraDeMedicamentosTemReforcoDeR80Milhoes} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 27-Matéria 56 social */}

                            <NavLink to="cartao-reforma-r-685-milhoes-para-renovar-moradias" id="cartao-reforma-r-685-milhoes-para-renovar-moradias" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["social"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Cartão Reforma: R$ 685 milhões para <strong>renovar moradias</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/27-cartao-reforma.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}cartao-reforma-r-685-milhoes-para-renovar-moradias`} component={CartaoReformaR685MilhoesParaRenovarMoradias} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 28-Matéria 46 gestão */}

                            <NavLink to="gestao-eficiente-gera-economia-para-a-populacao" id="gestao-eficiente-gera-economia-para-a-populacao" className="picture-item grayscale square" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Gestão eficiente gera <strong>economia para a população</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/28-gestao-eficiente.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}gestao-eficiente-gera-economia-para-a-populacao`} component={GestaoEficienteGeraEconomiaParaAPopulacao} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 35 Matéria 65 segurança e defesa */}
                            <NavLink to="governo-reforca-operacoes-na-faixa-de-fronteira" id="governo-reforca-operacoes-na-faixa-de-fronteira" className="picture-item grayscale square" tabIndex="0" data-groups='["seguranca-e-defesa"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-one">
                                        <strong>Governo reforça operações</strong> na faixa de fronteira
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/35-governo-reforca.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-reforca-operacoes-na-faixa-de-fronteira`} component={GovernoReforcaOperacoesNaFaixaDeFronteira} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 30-Matéria 52 social */}

                            <NavLink to="bolsa-familia-tem-aumento-no-beneficio-e-fila-zerada" id="bolsa-familia-tem-aumento-no-beneficio-e-fila-zerada" className="picture-item grayscale square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_two type">
                                    <div className="float-title float-title-three">
                                        Bolsa família tem aumento no benefício e <strong>fila zerada</strong>
                                    </div>
                                    <div className="thumb" id="bolsafamilia">
                                        <img alt="" src={require('../assets/img/thumb/30-bolsa-familia.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}bolsa-familia-tem-aumento-no-beneficio-e-fila-zerada`} component={BolsaFamiliaTemAumentoNoBeneficioEFilaZerada} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 31- Matéria 57 social */}

                            <NavLink to="minha-Casa-minha-vida-793-mil-unidades-em-20-meses" id="minha-Casa-minha-vida-793-mil-unidades-em-20-meses" className="picture-item grayscale square-two-columns" tabIndex="0" data-groups='["social"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Minha Casa Minha Vida: <strong>793 mil unidades em 20 meses</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/31-minha-casa-minha-vida.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={MinhaCasaMinhaVida793MilUnidadesEm20Meses} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 32-Matéria 59 social */}
                            <NavLink to="recorde-na-emissao-de-titulos-de-propriedade-em-2017" id="recorde-na-emissao-de-titulos-de-propriedade-em-2017" className="picture-item square-two-columns" tabIndex="0" data-groups='["social"]'>
                                <div className="type_five type">
                                    <div className="float-title float-title-two-collumns">
                                        Recorde na emissão de títulos de <strong>propriedade em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/32-titulos-propriedades.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}recorde-na-emissao-de-titulos-de-propriedade-em-2017`} component={RecordeNaEmissaoDeTitulosDePropriedadeEm2017} />
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* fim-bloco */}

                            {/*início-bloco */}

                            {/* 33- Matéria 60 social */}

                            <NavLink to="entrega-recorde-de-titulos-da-reforma-agraria" id="entrega-recorde-de-titulos-da-reforma-agraria" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Entrega <strong>recorde de títulos</strong> da reforma agrária
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/33-reforma-agraria.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}entrega-recorde-de-titulos-da-reforma-agraria`} component={EntregaRecordeDeTitulosDaReformaAgraria} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 34- Matéria 64 segurança e defesa */}

                            <NavLink to="rio-mais-seguro-com-intervencao-federal" id="rio-mais-seguro-com-intervencao-federal" className="picture-item grayscale square" tabIndex="0" data-groups='["seguranca-e-defesa"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Rio mais seguro</strong> com intervenção federal
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/34-rio-seguro.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}rio-mais-seguro-com-intervencao-federal`} component={RioMaisSeguroComIntervencaoFederal} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 29 Matéria 40- 11 economia */}

                            <NavLink to="teto-dos-gastos" id="teto-dos-gastos" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_eight_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Teto dos gastos <strong>ajusta as contas públicas</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/29-teto-gastos.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}teto-dos-gastos`} component={TetoDosGastos} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 36- Matéria 74 meio ambiente */}
                            <NavLink to="quase-duas-francas-de-unidades-de-conservacao-criadas" id="quase-duas-francas-de-unidades-de-conservacao-criadas" className="picture-item square-two-rows" tabIndex="0" data-groups='["meio-ambiente"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Quase duas Franças de Unidades de <strong>Conservação criadas</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/36-unidades-conservacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}quase-duas-francas-de-unidades-de-conservacao-criadas`} component={QuaseDuasFrancasDeUnidadesDeConservacaoCriadas} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 37- Matéria 86 cultura */}

                            <NavLink to="id-jovem-amplia-acesso-a-cultura-de-500-mil-jovens" id="id-jovem-amplia-acesso-a-cultura-de-500-mil-jovens" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["cultura"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>ID Jovem amplia acesso à cultura</strong> de 500 mil jovens
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/37-jovem-id.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}id-jovem-amplia-acesso-a-cultura-de-500-mil-jovens`} component={IdJovemAmpliaAcessoACulturaDe500MilJovens} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 38- Matéria 71 infraestrutura */}

                            <NavLink to="integracao-do-sao-francisco-mais-vida-no-nordeste" id="integracao-do-sao-francisco-mais-vida-no-nordeste" className="picture-item grayscale square" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-one">
                                        Integração do São Francisco: <strong>mais vida no Nordeste</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/38-integracao-rio-sao-francisco.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}integracao-do-sao-francisco-mais-vida-no-nordeste`} component={IntegracaoDoSaoFranciscoMaisVidaNoNordeste} />
                                    </div>
                                </div>
                            </NavLink>


                            {/* 39 - Matéria 75 meio-ambiente */}

                            <NavLink to="multas-ambientais-viram-investimento" id="multas-ambientais-viram-investimento" className="picture-item grayscale square" tabIndex="0" data-groups='["meio-ambiente"]'>
                                <div className="type_six_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Multas ambientais <strong>viram investimento</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/39-multas-ambientais.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}multas-ambientais-viram-investimento`} component={MultasAmbientaisViramInvestimento} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* Matéria 40- 66 segurança e defesa */}

                            <NavLink to="pf-bate-recorde-historico-de-apreensao-de-drogas" id="pf-bate-recorde-historico-de-apreensao-de-drogas" className="picture-item square" tabIndex="0" data-groups='["seguranca-e-defesa"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>PF bate recorde</strong> histórico de apreensão de drogas
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/40-PF-apreensao-drogas.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}pf-bate-recorde-historico-de-apreensao-de-drogas`} component={PfBateRecordeHistoricoDeApreensaoDeDrogas} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 11 - Matéria 26 Educação */}

                            <div onClick={this.openModal.bind(this)} to="fies-tera-350-mil" id="fies-tera-350-mil" className="picture-item square-two-columns" tabIndex="0" data-groups='["social"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Fies abre 100 mil vagas a <strong>juro zero em 2018</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/11-fies-vagas.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}fies-tera-350-mil`} component={FiesTera350Mil} />
                                    </div>
                                </div>
                            </div>

                            {/* 12 Matéria 20 Agro */}

                            <div onClick={this.openModal.bind(this)} to="agricultura-familiar-recebe" id="agricultura-familiar-recebe" className="picture-item square-two-columns" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Agricultura familiar recebe crédito de <strong>R$ 30 bilhões</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/12-agricultura-familiar.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}agricultura-familiar-recebe`} component={AgriculturaFamiliarRecebe} />
                                    </div>
                                </div>
                            </div>

                            {/* fim-bloco */}

                            {/* inicio-bloco */}

                            {/* 41 - Matéria 21 - AGRO */}
                        
                            <NavLink to="mesmo-com-operacao-carne-fraca" id="mesmo-com-operacao-carne-fraca" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one type">
                                        <div className="float-title float-title-one">
                                        Exportações de carne <strong>crescem 9% em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/41-exportacoes-carne.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}mesmo-com-operacao-carne-fraca`} component={MesmoComOperacaoCarneFraca} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 42 - matéria 12 economia*/}
                            <NavLink to="novas-regras-pagamento" id="novas-regras-pagamento" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_two type">
                                        <div className="float-title float-title-one">
                                        Novas regras de pagamento <strong>fortalecem o consumo</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/42-novas-regras-pagamento.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}novas-regras-pagamento`} component={NovasRegrasPagamento} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 43 - matéria 53 social*/}
                            <NavLink to="com-progredir-familias-brasileiras-ganham-autonomia" id="com-progredir-familias-brasileiras-ganham-autonomia" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_eight_alt type">
                                    <div className="float-title-alt float-title-one">
                                     Com Progredir, <strong>famílias brasileiras ganham autonomia</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/43-com-progredir.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}com-progredir-familias-brasileiras-ganham-autonomia`} component={ComProgredirFamiliasGanhamAutonomia} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 44 - matéria 23 AGRO */}
                            <NavLink to="brasil-amplia-seu-parque" id="brasil-amplia-seu-parque" className="picture-item square-two-rows" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-two">
                                        Brasil se <strong>destaca na produção de energia eólica</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/44-brasil-amplia-seu-parque.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-amplia-seu-parque`} component={BrasilAmpliaSeuParque} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 45 - video 2*/}
                            <div onClick={this.openModal.bind(this)} to="depoimento-ministro-direitos-humanos" id="depoimento-ministro-direitos-humanos" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["todos"]'>
                                <div className="type_three type">
                                    <div className="thumb" id="depoimento2">
                                        <img alt="" className="column" src={require('../assets/img/thumb/45-depoimento-ministro-direitos-humanos.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}depoimento-ministro-direitos-humanos`} component={DepoimentoMinistroDireitosHumanos} />
                                    </div>
                                </div>
                            </div>

                            {/* 46 - matéria 17*/}

                            <NavLink to="apos-20-anos-disputa" id="apos-20-anos-disputa" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Acordo deve <strong>injetar R$ 12 bi na economia</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/46-apos-20-anos-disputa.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}apos-20-anos-disputa`} component={Apos20AnosDisputa} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 47 - vídeo 3*/}
                            <div onClick={this.openModal.bind(this)} to="depoimento-ministro-turismo" id="depoimento-ministro-turismo" className="picture-item square" tabIndex="0" data-groups='["todos"]'>
                                <div className="type_six type">
                                    <div className="thumb" id="depoimento3">
                                        <img alt="" className="column" src={require('../assets/img/thumb/47-depoimento-ministro-turismo.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}ministro-turismo`} component={DepoimentoMinistroTurismo} />
                                    </div>
                                </div>
                            </div>

                            {/* 48 - */}
        
                            <NavLink to="com-vacinacao-brasil-recebe-certificado" id="com-vacinacao-brasil-recebe-certificado" className="picture-item square" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Brasil <strong>livre da febre aftosa</strong> com vacinação
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/48-com-vacinacao-brasil-recebe-certificado.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}com-vacinacao-brasil-recebe-certificado`} component={ComVacinacaoBrasilRecebeCertificado} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 49 - */}

                            <NavLink to="brasil-mais-turismo" id="brasil-mais-turismo" className="picture-item square-two-columns" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Brasil + Turismo: <strong>empregos e dinamismo para o setor</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/49-brasil-mais-turismo.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-mais-turismo`} component={BrasilMaisTurismo} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 50 */}

                            <NavLink to="avancar-alavanca-crescimento" id="avancar-alavanca-crescimento" className="picture-item square-two-columns" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Brasil + Turismo: <strong>empregos e dinamismo para o setor</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/50-avancar-alavanca-crescimento.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}avancar-alavanca-crescimento`} component={AvancarAlavancaCrescimento} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* fim-bloco */}

                            {/* início-bloco */}

                            {/* 51 - Matéria 25 educação */}
                        
                            <NavLink to="nova-grade-curricular-unifica" id="nova-grade-curricular-unifica" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-one">
                                        Nova grade curricular <strong>unifica ensino no Brasil</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/51-nova-grade-curricular-unifica.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}nova-grade-curricular-unifica`} component={NovaGradeCurricularUnifica} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 52 -vídeo 6*/}

                            <div onClick={this.openModal.bind(this)} to="depoimento-ministro-industria-comercio-exterior-servicos" id="depoimento-ministro-industria-comercio-exterior-servicos" className="picture-item square" tabIndex="0" data-groups='["todos"]'>
                                <div className="type_two type">
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/52-depoimento-ministro-industria-comercio-exterior-servicos.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}depoimento-ministro-industria-comercio-exterior-servicos`} component={DepoimentoMinistroIndustriaComercioExteriorServicos} />
                                    </div>
                                </div>
                            </div>

                            {/* 53 - Matéria 28 educação*/}
                        
                           <NavLink to="programa-medioTec-permite" id="programa-medioTec-permite" className="picture-item grayscale square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_eight type">
                                    <div className="float-title float-title-one">
                                        MedioTec oferece <strong>formação técnica para estudantes</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/53-mediotec.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}programa-medioTec-permite`} component={ProgramaMedioTecPermite} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 54 - Matéria 30 educacao */}
                        
                            <NavLink to="governo-investe-na-formacao" id="governo-investe-na-formacao" className="picture-item square-two-rows" tabIndex="0" data-groups='["social"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-two">
                                        Governo <strong>investe R$ 1 bi na formação</strong> de professores
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/54-governo-investe-na-formacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-investe-na-formacao`} component={GovernoInvesteNaFormacao} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 55 - vídeo 4*/}

                            <div onClick={this.openModal.bind(this)} to="depoimento-ministro-minas-energia" id="depoimento-ministro-minas-energia" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["todos"]'>
                                <div className="type_three type">
                                    <div className="thumb type_three" id="depoimento4">
                                        <img alt="" className="column" src={require('../assets/img/thumb/55-depoimento-ministro-minas-energia.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}depoimento-ministro-minas-energia`} component={DepoimentoMinistroMinasEnergia} />
                                    </div>
                                </div>
                            </div>

                            {/* 56 - Matéria 31 saúde */}

                            <NavLink to="governo-amplia-participacao" id="governo-amplia-participacao" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Mais <strong>Brasileiros no Mais Médicos</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/56-governo-amplia-participacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-amplia-participacao`} component={GovernoAmpliaParticipacao} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 57 - Matéria 32 saude */}
                            
                            <NavLink to="governo-amplia-investimento" id="governo-amplia-investimento" className="picture-item grayscale square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_six_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Mais recursos para a Saúde</strong> dos brasileiros
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/57-governo-amplia-investimento.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-amplia-investimento`} component={GovernoAmpliaInvestimento} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 58 - Matéria 42 saude */}

                            <NavLink to="repasses-na-saude-ganham-reforco" id="repasses-na-saude-ganham-reforco" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Repasses na Saúde <strong>reforçam a atenção básica</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/58-repasses-na-saude-ganham-reforco.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}repasses-na-saude-ganham-reforco`} component={RepassesNaSaudeGanhamReforco} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 59 - Matéria 13 economia */}
                        
                            <NavLink to="producao-veiculos-volta-crescer" id="producao-veiculos-volta-crescer" className="picture-item square-two-columns" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Produção de veículos <strong>volta a crescer em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/59-producao-veiculos-volta-crescer.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}producao-veiculos-volta-crescer`} component={ProducaoVeiculosVoltaCrescer} />
                                    </div>
                                </div>
                            </NavLink>
                        
                            {/* 60 - Matéria 14 economia */}
                            <NavLink to="plano-agro-moderniza" id="plano-agro-moderniza" className="picture-item square-two-columns" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Plano <strong>Agro+ moderniza o agronegócio</strong> brasileiro
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/60-plano-agro-moderniza.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}plano-agro-moderniza`} component={PlanoAgroModerniza} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* início-bloco */}

                            {/* 61 - Matéria 40 saude */}
                            <NavLink to="governo-adquire-repelentes-para-gestante" id="governo-adquire-repelentes-para-gestante" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-one">
                                        Gestantes de <strong>baixa renda recebem repelentes</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/61-governo-adquire-repelentes-para-gestante.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-adquire-repelentes-para-gestante`} component={GovernoAdquireRepelentesParaGestante} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 62 - vídeo 5*/}
                            
                            <div onClick={this.openModal.bind(this)} to="depoimento-ministro-fazenda" id="depoimento-ministro-fazenda" className="picture-item square" tabIndex="0" data-groups='["todos"]'>
                                <div className="type_two type">
                                    <div className="thumb" id="depoimento5">
                                        <img alt="" className="column" src={require('../assets/img/thumb/62-depoimento-ministro-fazenda.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}depoimento-ministro-fazenda`} component={DepoimentoMinistroDaFazenda} />
                                    </div>
                                </div>
                            </div>

                            {/* 63 - Matéria 35 saude */}
                            <NavLink to="medicamentos-reajustados" id="medicamentos-reajustados" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_eight_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Medicamentos reajustados <strong>abaixo da inflação</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/63-medicamentos-reajustados.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}medicamentos-reajustados`} component={MedicamentosReajustadosAbaixoInflacao} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 64 - Matéria 41 saude */}
                            <NavLink to="governo-habilita-upas" id="governo-habilita-upas" className="picture-item square-two-rows" tabIndex="0" data-groups='["social"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Mais <strong>206 UPAs 24 horas habilitadas</strong> a funcionar
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/64-governo-habilita-upas.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-habilita-upas`} component={GovernoHabilitaUpas} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 65 - vídeo 6*/}
                            
                            <div onClick={this.openModal.bind(this)} to="depoimento-ministro-saude" id="depoimento-ministro-saude" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["todos"]'>
                                <div className="type_three type">
                                    <div className="thumb" id="depoimento6">
                                        <img alt="" className="column" src={require('../assets/img/thumb/65-depoimento-ministro-saude.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}depoimento-ministro-saude`} component={DepoimentoMinistroDaFazenda} />
                                    </div>
                                </div>
                            </div>

                            {/* 66 - vídeo 7*/}
                            
                            <div onClick={this.openModal.bind(this)} to="depoimento-ministro-educacao" id="depoimento-ministro-educacao" className="picture-item square" tabIndex="0" data-groups='["todos"]'>
                                <div className="type_one type">
                                    <div className="thumb" id="depoimento7">
                                        <img alt="" className="column" src={require('../assets/img/thumb/66-depoimento-ministro-educacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}depoimento-ministro-educacao`} component={DepoimentoMinistroEducacao} />
                                    </div>
                                </div>
                            </div>

                            {/* 67 - Matéria 44 saude */}
                        
                            <NavLink to="governo-oferece-melhor-tratamento" id="governo-oferece-melhor-tratamento" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-one">
                                        SUS ganha melhor <strong>tratamento contra HIV/Aids</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/67-governo-oferece-melhor-tratamento.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-oferece-melhor-tratamento`} component={GovernoOfereceMelhorTratamento} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 68 - Matéria 39 saude */}
                        
                            <NavLink to="governo-investe-em-teste-rapido" id="governo-investe-em-teste-rapido" className="picture-item grayscale square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Teste rápido para zika; <strong>assistência garantida</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/68-governo-investe-em-teste-rapido.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-investe-em-teste-rapido`} component={GovernoInvesteEmTesteRapido} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 69 - Matéria 45 gestao */}
                        
                            <NavLink to="cartorios-de-todo-o-brasil-poderao-emitir" id="cartorios-de-todo-o-brasil-poderao-emitir" className="picture-item square-two-columns" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Cartórios poderão <strong>emitir documentos de identidade</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/69-cartorios-de-todo-o-brasil-poderao-emitir.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}cartorios-de-todo-o-brasil-poderao-emitir`} component={CartoriosDeTodoOBrasilPoderaoEmitir} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 70 - matéria 49 gestão e desburocratização*/}

                            <div onClick={this.openModal.bind(this)} to="reforma-administrativa" id="reforma-administrativa" className="picture-item square-two-columns" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Reforma administrativa <strong>reduz despesas do Governo</strong>
                                    </div>  
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/70-reforma-administrativa.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}reforma-administrativa`} component={ReformaAdministrativa} />
                                    </div>
                                </div>
                            </div>

                            {/* fim-bloco */}

                            {/* início-bloco */}

                            {/* 71 - Matéria 47 gestão */}
                        
                            <NavLink to="novo-formato-da-carteira-de-habilitacao" id="novo-formato-da-carteira-de-habilitacao" className="picture-item grayscale square" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        CNH ganha chip e <strong>mais segurança contra fraudes</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/71-novo-formato-da-carteira-de-habilitacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}novo-formato-da-carteira-de-habilitacao`} component={NovoFormatoDaCarteiraDeHabilitacao} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 72 - Matéria 50 gestao */}
                            
                            <NavLink to="governo-acata-conselhao" id="governo-acata-conselhao" className="picture-item square" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-four">
                                    Governo acata 92% das <strong>recomendações do Conselhão</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/72-governo-acata-conselhao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-acata-conselhao`} component={GovernoAcataConselhao} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 73 - Matéria 51 gestao */}

                            <NavLink to="taxigov-gera-reducao-de-custos" id="taxigov-gera-reducao-de-custos" className="picture-item square" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_eight_alt type">
                                    <div className="float-title-alt float-title-one">
                                        TaxiGov traz eficiência e economia para o Governo
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/73-taxigov-gera-reducao-de-custos.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}taxigov-gera-reducao-de-custos`} component={TaxigovGeraReducaoDeCustos} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 74 - Matéria 48 gestao */}
                        
                            <NavLink to="governo-lanca-documentos-digitais" id="governo-lanca-documentos-digitais" className="picture-item square-two-rows" tabIndex="0" data-groups='["social"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-two">
                                        Documentos digitais <strong>facilitam a vida do brasileiro</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/74-governo-lanca-documentos-digitais.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-lanca-documentos-digitais`} component={GovernoLancaDocumentosDigitais} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* ÚLTIMA LEVA */}

                            {/* 75 - matéria 54 social*/}

                            <NavLink to="plataforma-de-servicos" id="plataforma-de-servicos" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["social"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-three">
                                        <strong>Plataforma de serviços</strong> dá suporte aos trabalhadores
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/75-plataforma-de-servicos.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}plataforma-de-servicos`} component={PlataformaDeServicos} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 76 - matéria 61 social*/}

                            <NavLink to="crianca-feliz" id="crianca-feliz" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Criança Feliz cuida do <strong>futuro do Brasil</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/76-crianca-feliz.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}crianca-feliz`} component={CriancaFeliz} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 77 - matéria 58 social */}
                            
                            <NavLink to="melhorias-para-o-BPC" id="melhorias-para-o-BPC" className="picture-item grayscale square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-one">
                                        Novas regras trazem melhorias para o BPC
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/77-melhorias-para-o-BPC.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}melhorias-para-o-BPC`} component={MelhoriasParaOBPC} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 78 */}

                            <NavLink to="com-progredir-familias-ganham-autonomia" id="com-progredir-familias-ganham-autonomia" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Com Progredir, famílias <strong>brasileiras ganham autonomia</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/78-com-progredir-familias-ganham-autonomia.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}com-progredir-familias-ganham-autonomia`} component={ComProgredirFamiliasGanhamAutonomia} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 79 - matéria 62 ciência e tecnologia*/}
                        
                            <NavLink to="internet-para-todos" id="internet-para-todos" className="picture-item square-two-columns" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Internet para todos conecta <strong>cantos remotos do País</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/79-internet-para-todos.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}internet-para-todos`} component={InternetParaTodos} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 80 - matéria 23 agro*/}

                            <div onClick={this.openModal.bind(this)} to="moderniza-agronegocio-brasileiro" id="moderniza-agronegocio-brasileiro" className="picture-item square-two-columns" tabIndex="0" data-groups='["social"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Plano Agro+ mordeniza o <strong>agronegócio brasileiro</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/80-moderniza-agronegocio-brasileiro.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}moderniza-agronegocio-brasileiro`} component={MordenizaAgronegocioBrasileiro} />
                                    </div>
                                </div>
                            </div>

                            {/* fim-bloco */}
                            
                            {/* início-bloco */}
                            {/* 81 - matéria 76 de meio ambiente */}
                        
                            <NavLink to="brasil-ratifica-acordo-de-paris" id="brasil-ratifica-acordo-de-paris" className="picture-item square" tabIndex="0" data-groups='["meio-ambiente"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Brasil ratifica acordo</strong> de Paris sobre o clima
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/81-brasil-ratifica-acordo-de-paris.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-ratifica-acordo-de-paris`} component={BrasilRatificaAcordoDeParis} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 82 - matéria 77 de meio ambiente*/}
                            
                            <div onClick={this.openModal.bind(this)} to="amazonia-legal" id="amazonia-legal" className="picture-item square" tabIndex="0" data-groups='["meio-ambiente"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Desmatamento cai 16%</strong> na Amazônia Legal
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/82-amazonia-legal.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}amazonia-legal`} component={AmazoniaLegal} />
                                    </div>
                                </div>
                            </div>

                            {/* 83 - materia 73 infraestrutura*/}
                            <NavLink to="saneamento-basico-a-populacao" id="saneamento-basico-a-populacao" className="picture-item square" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_eight type">
                                    <div className="float-title float-title-one">
                                        Programa leva <strong>saneamento básico à população</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/83-saneamento-basico-a-populacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}saneamento-basico-a-populacao`} component={SaneamentoBasicoAPopulacao} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 84 - matéria 80 de internacional*/}
                            <NavLink to="acordos-impulsionam-brasil-exterior" id="acordos-impulsionam-brasil-exterior" className="picture-item square-two-rows" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Acordos impulsionam <strong>Brasil no exterior</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/84-acordo-impulsionam-brasil-exterior.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}acordos-impulsionam-brasil-exterior`} component={AcordoImpulsionamBrasilExterior} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 85 - matéria 72 de infraestrutura */}
                            
                            <NavLink to="novo-chico" id="novo-chico" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Novo Chico: R$7 bilhões </strong>para revitalização
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/85-novo-chico.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}novo-chico`} component={NovoChico} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 86 -matéria 70 de infraestrutura */}
                            
                            <NavLink to="aeroportos-regionais-recebem" id="aeroportos-regionais-recebem" className="picture-item grayscale square" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                    Aeroportos regionais <strong>recebem R$800 milhões</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/86-aeroportos-regionais-recebem.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}aeroportos-regionais-recebem`} component={AeroportosRegionaisRecebem} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 87 - matéria 87 de cultura */}
                        
                            <NavLink to="cais-do-valongo-patrimonio-mundial" id="cais-do-valongo-patrimonio-mundial" className="picture-item square" tabIndex="0" data-groups='["cultura"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-one">
                                        <strong>Cais do Valongo é declarado </strong> Patrimônio Mundial da Humanidade
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/87-cais-do-valongo-patrimonio-mundial.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}cais-do-valongo-patrimonio-mundial`} component={CaisDoValongoPatrimonioMundial} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 88 - matéria 68 de segurança e defesa */}
                        
                            <NavLink to="mulheres-poderao-chegar-ao-comando-exercito" id="mulheres-poderao-chegar-ao-comando-exercito" className="picture-item square" tabIndex="0" data-groups='["seguranca-e-defesa"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Mulheres poderão chegar ao <strong>comando do Exército</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/88-mulheres-poderao-chegar-ao-comando-exercito.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}mulheres-poderao-chegar-ao-comando-exercito`} component={MulheresPoderaoChegarAoComandoExercito} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 89 - matéria 81 de internacional*/}
                        
                            <NavLink to="comite-coordenar-imigracao" id="comite-coordenar-imigracao" className="picture-item square-two-columns" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        <strong>Governo cria comitê </strong> para coordenar imigração
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/89-comite-coordenar-imigracao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}comite-coordenar-imigracao`} component={ComiteCoordenarMigracao} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 90 - matéria 85 de cultura */}

                            <div onClick={this.openModal.bind(this)} to="lei-rouanet-aperfeicoada" id="lei-rouanet-aperfeicoada" className="picture-item square-two-columns" tabIndex="0" data-groups='["cultura"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        <strong>Lei Rouanet de incentivo </strong>à cultura é aperfeiçoada
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/90-lei-rouanet-aperfeicoada.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}lei-rouanet-aperfeicoada`} component={LeiRouanetAperfeicoada} />
                                    </div>
                                </div>
                            </div>

                            {/* fim-bloco */}
                            
                            {/* início-bloco */}
                            
                            {/* 91 - matéria 82 de internacional*/}
                        
                            <NavLink to="brasil-e-china-assinam-acordo" id="brasil-e-china-assinam-acordo" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Brasil e China assinam acordos</strong> de investimento e cooperação
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/91-brasil-e-china-assinam-acordo.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-e-china-assinam-acordo`} component={BrasilEChinaAssinamAcordo} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 92 - matéria 67 segurança e defesa */}
                            
                            <div onClick={this.openModal.bind(this)} to="alerta-de-risco-por-SMS" id="alerta-de-risco-por-SMS" className="picture-item square" tabIndex="0" data-groups='["seguranca-e-desfesa"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Alerta de risco por SMS é</strong> ampliado para todo o País
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/92-alerta-de-risco-por-SMS.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}alerta-de-risco-por-SMS`} component={AlertaDeRiscoPorSMS} />
                                    </div>
                                </div>
                            </div>

                            {/* 93 - matéria 92 de turismo*/}
                            <NavLink to="turistas-estrangeiros-gastam" id="turistas-estrangeiros-gastam" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_eight_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Turistas estrangeiros gastam soma recorde no Brasil
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/93-turistas-estrangeiros-gastam.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}turistas-estrangeiros-gastam`} component={TuristasGastamSomaRecorde} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 94 - matéria 88 de cultura*/}
                            <NavLink to="cinema-nacional-bate-recorde" id="cinema-nacional-bate-recorde" className="picture-item square-two-rows" tabIndex="0" data-groups='["cultura"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Cinema nacional bate recorde</strong> de lançamentos em 2017
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/94-cinema-nacional-bate-recorde.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}cinema-nacional-bate-recorde`} component={CinemaNacionalBateRecorde} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 95 - matéria 91 de turismo*/}
                            
                            <NavLink to="brasil-registra-recorde-de-turistas" id="brasil-registra-recorde-de-turistas" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Brasil registra recorde <strong>de 6,5 milhões de turistas </strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/95-brasil-registra-recorde-de-turistas.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-registra-recorde-de-turistas`} component={BrasilRegistraRecordeDeTuristas} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 96 - matéria 96 de esporte*/}
                            
                            <NavLink to="segundo-tempo-beneficia" id="segundo-tempo-beneficia" className="picture-item grayscale square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Segundo tempo beneficia </strong> mais de 109 mil jovens
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/96-segundo-tempo-beneficia.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}segundo-tempo-beneficia`} component={SegundoTempoBeneficia} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 97 - matéria 84 de internacional */}
                        
                            <NavLink to="economia-brasileira-avanca-no-mundo" id="economia-brasileira-avanca-no-mundo" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-five">
                                        Novos acordos permitem <strong>economia brasileira avançar no mundo</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/97-economia-brasileira-avanca-no-mundo.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}economia-brasileira-avanca-no-mundo`} component={EconomiaBrasileiraAvancaNoMundo} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 98 - matéria 83 de internacional */}
                        
                            <NavLink to="comercio-exterior-impulsionado" id="comercio-exterior-impulsionado" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                       Comércio exterior é <strong>impulsionado com novas medidas</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/98-comercio-exterior-impulsionado.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}comercio-exterior-impulsionado`} component={ComercioExteriorImpulsionado} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 99 - matéria 93 de turismo*/}
                        
                            <NavLink to="parques-nacionais-tem-recorde-de-visitacao" id="parques-nacionais-tem-recorde-de-visitacao" className="picture-item square-two-columns" tabIndex="0" data-groups='["meio-ambiente"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                      Parques Nacionais têm <strong>recorde de visitação em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/99-parques-nacionais-tem-recorde-de-visitacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}parques-nacionais-tem-recorde-de-visitacao`} component={ParquesNacionaisTemRecordeDeVisitacao} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 100 - matéria 78 de meio ambiente */}

                            <div onClick={this.openModal.bind(this)} to="brasil-supera-meta-da-onu" id="brasil-supera-meta-da-onu" className="picture-item square-two-columns" tabIndex="0" data-groups='["meio-ambiente"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        <strong>Brasil supera meta da ONU </strong>sobre conservação marinha
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/100-brasil-supera-meta-da-onu.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-supera-meta-da-onu`} component={BrasilSuperaMetaOnu} />
                                    </div>
                                </div>
                            </div>

                            {/*fim-bloco*/}

                            {/*início-bloco*/}

                            {/* 101 - matéria 96 de turismo*/}
                        
                            <NavLink to="mais-turismo-e-cultura" id="mais-turismo-e-cultura" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Mais turismo e cultura</strong> no Rio de Janeiro a Janeiro
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/101-mais-turismo-e-cultura.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}mais-turismo-e-cultura`} component={MaisTurismoECultura} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 102 -matéria 90 de turismo */}
                            
                            <div onClick={this.openModal.bind(this)} to="e-visa-aumenta-turismo" id="e-visa-aumenta-turismo" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>E-visa aumenta turismo no Brasil</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/102-e-visa-aumenta-turismo.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}e-visa-aumenta-turismo`} component={EVisaAumentaTurismo} />
                                    </div>
                                </div>
                            </div>

                            {/* 103 - matéria 94 de turismo*/}
                            <NavLink to="pronatec-turismo-oferece" id="pronatec-turismo-oferece" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_eight_alt type">
                                    <div className="float-title-alt float-title-four">
                                        <strong>Pronatec Turismo oferece</strong> mais de 200 mil vagas
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/103-pronatec-turismo-oferece.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}pronatec-turismo-oferece`} component={PronatecTurismoOferece} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 104 - matéria 97 de esporte */}
                            <NavLink to="esporte-e-cidadania" id="esporte-e-cidadania" className="picture-item square-two-rows" tabIndex="0" data-groups='["social"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Esporte e Cidadania </strong>para Todos apoiará 15,6 mil jovens
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/104-esporte-e-cidadania.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}esporte-e-cidadania`} component={EsporteECidadania} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 105 - matéria 98 de esporte*/}
                            
                            <NavLink to="bolsa-atleta-2017" id="bolsa-atleta-2017" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["social"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Bolsa Atleta <strong>contempla 5.830 atletas em 2017 </strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/105-bolsa-atleta-2017.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}bolsa-atleta-2017`} component={BolsaAtleta2017} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 106 - matéria 99 de esporte*/}
                            
                            <NavLink to="forcas-no-esporte" id="forcas-no-esporte" className="picture-item grayscale square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Forças no Esporte: <strong>mais atividades para os estudantes </strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/106-forcas-no-esporte.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}forcas-no-esporte`} component={ForcasNoEsporte} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* fim-bloco - cuidado ao montar, observe a ordem dos blocos! */}
                            {/* FIM PUBLICAÇÃO */}
                        </div>

                        <div id="bottom">
                            <img alt="" src={logoRodape} id="logo-rodape"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
