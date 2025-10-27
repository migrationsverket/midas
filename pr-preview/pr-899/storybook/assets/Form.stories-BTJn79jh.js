import{j as n}from"./iframe-9qi1sjQE.js";import{$ as j}from"./Form-BnL0wZ6r.js";import{G}from"./Grid-BB_0Ekkg.js";import{G as e}from"./GridItem-DWezOQsx.js";import{T as r}from"./TextField-DzOLV0WY.js";import{S as I}from"./Select-DWmAYu2G.js";import{B as a}from"./Button-BDPnZEZi.js";import{R as g,a as b}from"./Radio-D67PoeI_.js";import{C as h}from"./CheckboxGroup-Ii7_hQEE.js";import{C as k}from"./Checkbox-Cz1Q0YjW.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BOPrNRZo.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CGa8j2ab.js";import"./useFocusRing-C_nCqLWs.js";import"./index-Dq0x7MIR.js";import"./index-62vT24e6.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BnvxaRR7.js";import"./TextField-CFaps5TQ.js";import"./FieldError-cZA4Oc7Z.js";import"./Text-Bt2yJt-q.js";import"./Text-BSN_vHES.js";import"./RSPContexts-B0uea_tV.js";import"./Group-Byq5sc_J.js";import"./Input-CHQNJCyk.js";import"./Hidden-wsQcZT4I.js";import"./Button-Cs_mzyse.js";import"./useLabels-CJFub3k0.js";import"./useButton-BlYTTHbo.js";import"./useTextField-DFHk3L7S.js";import"./useControlledState-DErVzbZj.js";import"./useField-BXk3wc9M.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CFYtfxAi.js";import"./Dialog-BkqaOrxT.js";import"./OverlayArrow-DeCsG83Z.js";import"./useResizeObserver-CUDr-FyO.js";import"./Collection-C2CqXUMj.js";import"./index-Dtj2ilZJ.js";import"./Separator-eTN96GIc.js";import"./SelectionManager-CLapP_kU.js";import"./useEvent-_e55lSPp.js";import"./scrollIntoView-CS884zjt.js";import"./SelectionIndicator-DanFfCml.js";import"./useDescription-B7eWpMY6.js";import"./ListKeyboardDelegate-Cg2GQ_1G.js";import"./PressResponder-Cq9jzF2j.js";import"./useLocalizedStringFormatter-CJh3ulRo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-rFbJ3Qbh.js";import"./VisuallyHidden-B7cOIVRx.js";import"./useLocalizedStringFormatter-Oiej8K6b.js";import"./x-HyusWlrI.js";import"./createLucideIcon-CnACDTpY.js";import"./Heading-Dk02mFHU.js";import"./info-DRO-ez2o.js";import"./Popover-DLhXAV5V.js";import"./Tag-CbR-WLEm.js";import"./ListBox-C0y7cI_U.js";import"./DragAndDrop-C051XU85.js";import"./inertValue-CwwvrQaw.js";import"./useListState-BrDDATq7.js";import"./useHighlightSelectionDescription-BiWIXPIp.js";import"./useUpdateEffect-BBs6aqyj.js";import"./useHasTabbableChild-CWwuJ346.js";import"./check-CJ2OY8SI.js";import"./ListBoxSection-CfSlK6Cy.js";import"./Virtualizer-CSkOi2t7.js";import"./chevron-down-CIjt3_mx.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-DYpRTNus.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
