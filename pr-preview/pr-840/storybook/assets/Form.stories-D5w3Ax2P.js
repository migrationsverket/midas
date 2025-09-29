import{j as n}from"./iframe-hT3e-0vJ.js";import{$ as j}from"./Form-BFTXVgW2.js";import{G}from"./Grid-Cu93YDLl.js";import{G as e}from"./GridItem-CJI5P2bB.js";import{T as r}from"./TextField-TCGt4dat.js";import{S as I}from"./Select-CQEnWt1o.js";import{B as a}from"./Button-Cz9EmY_3.js";import{R as g,a as b}from"./Radio-CVPO6_aq.js";import{C as h}from"./CheckboxGroup-fKjmPRCs.js";import{C as k}from"./Checkbox-BU7VmWAF.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-C86j3U4o.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cs7U_f5e.js";import"./useFocusRing-BqthTWUT.js";import"./index-BHSnYymL.js";import"./index-BmZeva6a.js";import"./TextFieldBase-DdkjM09g.js";import"./TextField-mMkJNvSo.js";import"./FieldError-C-Lzpo4P.js";import"./Text-C4SyuPEG.js";import"./Text-BIe2rS-x.js";import"./context-aRqraEu2.js";import"./SelectionManager-6NHlvszd.js";import"./useEvent-SdtN3h4V.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CcQ9vUzB.js";import"./useDescription-BqdiGDC3.js";import"./useControlledState-Bn0f67bl.js";import"./Group-p1AfBTsN.js";import"./Input-C2bmHG2i.js";import"./Hidden-CJbMYY-T.js";import"./Button-D2KIUvem.js";import"./useLabels-Cs_2fAkc.js";import"./useButton-Cz0Xv7Ca.js";import"./useTextField-C6_53nB_.js";import"./useField-qj5Bn1tc.js";import"./TextField.module-DjUItNl5.js";import"./Label-BoMquCUn.js";import"./Dialog-CHH6cuEy.js";import"./RSPContexts-BErp2Zl6.js";import"./OverlayArrow-C5oEJ2Rg.js";import"./useResizeObserver-B1fH-6TA.js";import"./Collection-BU6Vtzzf.js";import"./index-gESokMY9.js";import"./Separator-BeEFDENy.js";import"./PressResponder-DMKeCjJu.js";import"./useLocalizedStringFormatter-D5ZmS8rG.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CkVkRSu4.js";import"./useLocalizedStringFormatter-BdFACxuy.js";import"./x-BhA8JD7d.js";import"./createLucideIcon-CLOGl7lC.js";import"./Heading-DnyBdSQK.js";import"./info-BoIDPWpW.js";import"./Popover-CNTwW3lg.js";import"./Tag-DaFY9V_5.js";import"./ListBox-oPhvkzTS.js";import"./DragAndDrop-DsbMbDaZ.js";import"./inertValue-DXOQcXqy.js";import"./useListState-sUmZtd7-.js";import"./useHighlightSelectionDescription-BnEVnbzF.js";import"./useUpdateEffect-CFYE1vSC.js";import"./useHasTabbableChild-DD20RS99.js";import"./check-BKwA52lA.js";import"./ListBoxSection-D85dl0iS.js";import"./Virtualizer-YM7yPGbx.js";import"./useObserveElement-DXzsDXIR.js";import"./chevron-down-BGnjgl0r.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BPNRL_02.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
