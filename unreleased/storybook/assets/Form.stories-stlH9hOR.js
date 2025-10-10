import{j as n}from"./iframe-0_gwTD1c.js";import{$ as j}from"./Form-BQxPFe5h.js";import{G}from"./Grid-DUgnSuVN.js";import{G as e}from"./GridItem-DCQqZ1Sd.js";import{T as r}from"./TextField-Bq67tGZc.js";import{S as I}from"./Select-Cx5FAIxg.js";import{B as a}from"./Button-SzzdHxwk.js";import{R as g,a as b}from"./Radio-DUikrb2b.js";import{C as h}from"./CheckboxGroup-DargHK0X.js";import{C as k}from"./Checkbox-CPzn5UCy.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-D9Rxz40L.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CP4e2-Os.js";import"./useFocusRing-CtiO9zTs.js";import"./index-CciQTKca.js";import"./index-kkKaBsxW.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-t2n_C9an.js";import"./TextField-D-gdFJJ-.js";import"./FieldError-CDzH2Aka.js";import"./Text-fVH0rgW6.js";import"./Text-Dlc-OxqF.js";import"./RSPContexts-CRKvd2Bk.js";import"./Group-C_d83lj2.js";import"./Input-DrCRHlrq.js";import"./Hidden-DHc4ycpY.js";import"./Button-BgpQL2fm.js";import"./useLabels-B9qYN_H0.js";import"./useButton-Bj1mqcc1.js";import"./useTextField-DEBFRKc_.js";import"./useControlledState-S2fhhql7.js";import"./useField-BOybvri7.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CoQIicIA.js";import"./Dialog-SQJeYLc4.js";import"./OverlayArrow-BtjbouvD.js";import"./useResizeObserver-C74WmmeD.js";import"./Collection-CyqKB_Dr.js";import"./index-ChuTVG2s.js";import"./Separator-djhPVUNM.js";import"./SelectionManager-tmsQuQJI.js";import"./useEvent-qf621vQd.js";import"./scrollIntoView-DrvHWDef.js";import"./SelectionIndicator-CreVoWmz.js";import"./useDescription-6sNN-qxR.js";import"./ListKeyboardDelegate-BtyknbeS.js";import"./PressResponder-BgRp_0iY.js";import"./useLocalizedStringFormatter-DWumeBaA.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DjElV_dA.js";import"./VisuallyHidden-y2zEIPVX.js";import"./useLocalizedStringFormatter-DBZTJjSH.js";import"./x-B6lg6xKx.js";import"./createLucideIcon-CX-ZLCYm.js";import"./Heading-Bus4Xl_d.js";import"./info-C-D9X4Z_.js";import"./Popover-eYQlRce2.js";import"./Tag-B-rI58W1.js";import"./ListBox-BfwOjsiU.js";import"./DragAndDrop-BxCEPgcn.js";import"./inertValue-CuTB4c7W.js";import"./useListState-Bs1VyA37.js";import"./useHighlightSelectionDescription-BzzkyCf8.js";import"./useUpdateEffect-B3fLNA69.js";import"./useHasTabbableChild-CJ7FpwsT.js";import"./check-CBWDg0yh.js";import"./ListBoxSection-X5iH84sp.js";import"./Virtualizer-yIO3VV3j.js";import"./useObserveElement-BWqMpufg.js";import"./chevron-down-WXhZUIZI.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BJ_8H9Ud.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Nn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,Nn as __namedExportsOrder,wn as default};
