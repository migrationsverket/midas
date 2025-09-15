import{j as n}from"./iframe-CMWkcGMo.js";import{$ as j}from"./Form-BbLxX9mi.js";import{G}from"./Grid-BdoAZM_6.js";import{G as e}from"./GridItem-BSviArza.js";import{T as r}from"./TextField-Bb5Ix6C3.js";import{S as I}from"./Select-aThMALiW.js";import{B as a}from"./Button-C1LQaEr6.js";import{R as g,a as b}from"./Radio-DSY_eSYU.js";import{C as h}from"./CheckboxGroup-Bun-I7iE.js";import{C as k}from"./Checkbox-Bd_pYT7N.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CGd_HDkx.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-naP1fvP_.js";import"./useFocusRing-BYZoTEeL.js";import"./index-UeKPFetu.js";import"./index-E0XArfo7.js";import"./TextFieldBase-rZxI7RIt.js";import"./TextField-C9k7jhmL.js";import"./FieldError-VDbzY2lR.js";import"./Text-CndwRtp1.js";import"./Text-CIeFHhN1.js";import"./ListKeyboardDelegate-iigQIclt.js";import"./SelectionManager-_qAlyy4W.js";import"./useEvent-DHP62o4A.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Bwf5KpoO.js";import"./useDescription-MXAOnG48.js";import"./useControlledState-CaDwgevc.js";import"./Group-BvcwOXkC.js";import"./Input-DCPlELOa.js";import"./Hidden-BWvuBTDN.js";import"./Button-CbUP_QGo.js";import"./useLabels-CgCBOGe8.js";import"./useButton-CiYqWrv-.js";import"./useTextField-DpjL_Dh4.js";import"./useField-C71OTaJm.js";import"./TextField.module-DjUItNl5.js";import"./Label-Dtj9zyk9.js";import"./Dialog-D2Q3veRK.js";import"./RSPContexts-DMKJakaX.js";import"./OverlayArrow-pZO-FG3F.js";import"./useResizeObserver-CsET1i26.js";import"./Collection-CSw4BWlg.js";import"./index-CR1KCKQN.js";import"./Separator-89-1ZxZy.js";import"./PressResponder-D5bUsFYB.js";import"./useLocalizedStringFormatter-CO570Ky9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DNC7yZnc.js";import"./Dialog-BN7xLhaV.js";import"./useLocalizedStringFormatter-BPhGDeal.js";import"./x-3F06CrVg.js";import"./createLucideIcon-BNtio7qA.js";import"./Heading-CHTMky3r.js";import"./info-CVwBUs2s.js";import"./Tag-SLlhuI8g.js";import"./ListBox-tv4EVOeK.js";import"./DragAndDrop-CPxyCo7M.js";import"./inertValue-NJFTXK73.js";import"./useListState-DGBoG0LX.js";import"./useHighlightSelectionDescription-D0FvKuKf.js";import"./useUpdateEffect-GiLrpnDf.js";import"./useHasTabbableChild-BeK4USdU.js";import"./check-C0dl7KL7.js";import"./ListBoxSection-Cib4J_PM.js";import"./Virtualizer-BbxFoLiu.js";import"./useObserveElement-DNye8Zyo.js";import"./chevron-down-8JrfPmiH.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BHCiLAfB.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
