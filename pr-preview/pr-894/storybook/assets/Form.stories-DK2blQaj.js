import{j as n}from"./iframe-DrB9qZTI.js";import{$ as j}from"./Form-BiDHGWFe.js";import{G}from"./Grid-Ci3CNWbi.js";import{G as e}from"./GridItem-BoF4RwmH.js";import{T as r}from"./TextField-Cvz6nIgw.js";import{S as I}from"./Select-C_FupFc4.js";import{B as a}from"./Button-yBTmUS_M.js";import{R as g,a as b}from"./Radio-CpF1AJVB.js";import{C as h}from"./CheckboxGroup--q6BX7S3.js";import{C as k}from"./Checkbox-7cjJbmHY.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CInG6W3X.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-J3VyGkUV.js";import"./useFocusRing-Bq-FvUHV.js";import"./index-D5KzPf6k.js";import"./index-DfIG-et7.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BMzUNzfM.js";import"./TextField-qWdMOUMI.js";import"./FieldError-Dk-uAcrK.js";import"./Text-CepI4xEo.js";import"./Text-DxFbSKvE.js";import"./RSPContexts-DIw6ykPW.js";import"./Group-0oFgwG6g.js";import"./Input-BZ-GE_qp.js";import"./Hidden-CfizYyXd.js";import"./Button-CXUNspnl.js";import"./useLabels-soz90g56.js";import"./useButton-cF82fNVP.js";import"./useTextField-CsheQ9jX.js";import"./useControlledState-CIzzj-r4.js";import"./useField-D5KtFbs5.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DbcP9VX_.js";import"./Dialog-D1C6FjAe.js";import"./OverlayArrow-CNPaV-QQ.js";import"./useResizeObserver-B7B4wUnz.js";import"./Collection-DOI60D6p.js";import"./index-CBcC_KMF.js";import"./Separator-CEzZGHar.js";import"./SelectionManager-fhVg1sA7.js";import"./useEvent-BKNlpUEC.js";import"./scrollIntoView-ANtPBZbe.js";import"./SelectionIndicator-BvENuxGq.js";import"./useDescription-BSAVr3Ry.js";import"./ListKeyboardDelegate-DCtLtuGF.js";import"./PressResponder-DVKLPMgZ.js";import"./useLocalizedStringFormatter-CZ3U7jKg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-Bx1KYYcF.js";import"./VisuallyHidden-57DYoABU.js";import"./useLocalizedStringFormatter-Dt2a-aZg.js";import"./x-ChoxX23J.js";import"./createLucideIcon-BLlFR1Nx.js";import"./Heading-Nc0xAJcY.js";import"./info-BKdKlqNK.js";import"./Popover-DQu9Y3LC.js";import"./Tag-B-qpqI9D.js";import"./ListBox-CrA5Vj7x.js";import"./DragAndDrop-Ba8RWtkR.js";import"./inertValue-BTBSufgg.js";import"./useListState-D110dMCj.js";import"./useHighlightSelectionDescription-TtiyUdS2.js";import"./useUpdateEffect-D44lhmn-.js";import"./useHasTabbableChild-DeAtaF0J.js";import"./check-DtpUhVp4.js";import"./ListBoxSection-XvFXRCWC.js";import"./Virtualizer-gK_zC3UO.js";import"./chevron-down-xk5KMdab.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-sgXx_6kU.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
