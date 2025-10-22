import{j as n}from"./iframe-Cb7jHaNb.js";import{$ as j}from"./Form-DcQf4QfL.js";import{G}from"./Grid-hiLS02QQ.js";import{G as e}from"./GridItem-B-3IX4_m.js";import{T as r}from"./TextField-BX1mNlnx.js";import{S as I}from"./Select-XWYZRQku.js";import{B as a}from"./Button-DFPm28Q1.js";import{R as g,a as b}from"./Radio-qDul2KZs.js";import{C as h}from"./CheckboxGroup-D8hHIou3.js";import{C as k}from"./Checkbox-BwRvgOs9.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CyP0GObj.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DpDdcD8q.js";import"./useFocusRing-CsCx11ey.js";import"./index-ud79XgVG.js";import"./index-D4gBkGgM.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-5bDDZIq0.js";import"./TextField-YKm6qEvZ.js";import"./FieldError-zPKEqsFc.js";import"./Text-Dsi3tbQd.js";import"./Text-CB2rCJFT.js";import"./RSPContexts-Di6nQCiQ.js";import"./Group-DXYejJnQ.js";import"./Input-prDxPTo0.js";import"./Hidden-CPlxy2Ck.js";import"./Button-DOjKQ_99.js";import"./useLabels-Ctf3iyx2.js";import"./useButton-DWoaIyjw.js";import"./useTextField-jFZxTDyu.js";import"./useControlledState-DwgaQMrP.js";import"./useField-C04C9A9R.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BkSUEgX4.js";import"./Dialog-DxlGPzKU.js";import"./OverlayArrow-MS60myJe.js";import"./useResizeObserver-CuuZvpsO.js";import"./Collection-Chh11VA4.js";import"./index-C9l8UnrH.js";import"./Separator-DOj_j4wH.js";import"./SelectionManager-DsqGRzew.js";import"./useEvent-BbMs5Q4E.js";import"./scrollIntoView-BpF8cKXp.js";import"./SelectionIndicator-CXJwc9qp.js";import"./useDescription-BFnWDMla.js";import"./ListKeyboardDelegate-B69Su7xj.js";import"./PressResponder-BefdnX3u.js";import"./useLocalizedStringFormatter-BKBaXouU.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-D_dBMiAW.js";import"./VisuallyHidden-CSDbp11i.js";import"./useLocalizedStringFormatter-CdnL3vRz.js";import"./x-i0_K_r7b.js";import"./createLucideIcon-DstSOE-E.js";import"./Heading-CoogEBuX.js";import"./info-DsfZY5v6.js";import"./Popover-DlIkw0i2.js";import"./Tag-hYrZ5B75.js";import"./ListBox-D8DtgN4K.js";import"./DragAndDrop-CRzenLcX.js";import"./inertValue-BkPgxgbw.js";import"./useListState-B8L3LTqd.js";import"./useHighlightSelectionDescription-C4SZTk5Y.js";import"./useUpdateEffect-D-OPisZM.js";import"./useHasTabbableChild-ClmzKyGi.js";import"./check-BPA3C2sc.js";import"./ListBoxSection-BGHeDOzU.js";import"./Virtualizer-B_NkfQbU.js";import"./chevron-down-D6shtHa7.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-DYg6p5UE.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
