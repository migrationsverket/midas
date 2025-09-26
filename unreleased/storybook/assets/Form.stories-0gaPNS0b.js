import{j as n}from"./iframe-B5nFrBgy.js";import{$ as j}from"./Form-DGwPQ4rV.js";import{G}from"./Grid-D1WPPmx6.js";import{G as e}from"./GridItem-B2UTHUop.js";import{T as r}from"./TextField-DGYxFoUX.js";import{S as I}from"./Select-CXX-KA2z.js";import{B as a}from"./Button-BUExq3GL.js";import{R as g,a as b}from"./Radio-Crgg_wh2.js";import{C as h}from"./CheckboxGroup-C9EOL-oJ.js";import{C as k}from"./Checkbox-Dx6J52LF.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-7U2IrIrW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BJeig2-Y.js";import"./useFocusRing-RYmoht4L.js";import"./index-DqH0GWUd.js";import"./index-CvYJluao.js";import"./TextFieldBase-J3UpWSgv.js";import"./TextField-BbDjxVhL.js";import"./FieldError-E-1e3pHW.js";import"./Text-BoVQ-01I.js";import"./Text-BUsU7nmi.js";import"./ListKeyboardDelegate-AgZIR9ew.js";import"./SelectionManager-B2WuJlBA.js";import"./useEvent-CbBSgCSj.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CFYTYdag.js";import"./useDescription-BsOeuLRW.js";import"./useControlledState-ZxzjMgIe.js";import"./Group-DEp6_HoN.js";import"./Input-aS4DCMT4.js";import"./Hidden-CSmHOZFM.js";import"./Button-BNDIlaSX.js";import"./useLabels-DVEdlixB.js";import"./useButton-BGOlPxAo.js";import"./useTextField-DV_zYh2K.js";import"./useField-CMepzr1s.js";import"./TextField.module-DjUItNl5.js";import"./Label-FrVrI0UP.js";import"./Dialog-BS1c4_gs.js";import"./RSPContexts-OAe59nMu.js";import"./OverlayArrow-BNSy4luP.js";import"./useResizeObserver-mo2eoHzO.js";import"./Collection-DFo8Q2kt.js";import"./index-D7v-SyQY.js";import"./Separator-C9DbVEvI.js";import"./PressResponder-BzCDs50E.js";import"./useLocalizedStringFormatter-BAz90HiB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B0UJv2EU.js";import"./Dialog-gw8MY7d3.js";import"./useLocalizedStringFormatter-D3DC5lxU.js";import"./x-D3mJ6TWs.js";import"./createLucideIcon-D7Ccmx1V.js";import"./Heading-DR8nh62z.js";import"./info-BjDF5G0M.js";import"./Tag-CIXgoX6h.js";import"./ListBox-DOuAZJSQ.js";import"./DragAndDrop-DZdSnpae.js";import"./inertValue-k3uiSJKf.js";import"./useListState-CohOPGro.js";import"./useHighlightSelectionDescription-PLXmPD7Z.js";import"./useUpdateEffect-QjAfAlsC.js";import"./useHasTabbableChild-IYNG3qUu.js";import"./check-DGdiNHWM.js";import"./ListBoxSection-Co2qwwbW.js";import"./Virtualizer-BbHJHsVB.js";import"./useObserveElement-BorW9O_h.js";import"./chevron-down-_1x-S_fG.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-C78v6I7m.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
