import{j as n}from"./iframe-CcqQFNZ4.js";import{$ as p}from"./Form-y_8eNxj3.js";import{G as d}from"./Grid-D_tLcHBc.js";import{G as e}from"./GridItem-Dd5ktrdg.js";import{T as r}from"./TextField-BXySqlf-.js";import{S as l}from"./Select-A9H7JhkR.js";import{B as a}from"./Button-Bb_v90_P.js";import{R as c,a as x}from"./Radio-DRamvBRW.js";import{C as u}from"./CheckboxGroup-CO5litKL.js";import{C as G}from"./Checkbox-OqroCei_.js";import"./preload-helper-Ct5FWWRu.js";import"./utils-CzaLILIa.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Du3RhDZj.js";import"./useFocusRing-BA6Kf1-f.js";import"./index-DuhG6G0z.js";import"./index-DovVAc5x.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DYg4kXht.js";import"./TextField-CPB9KGCq.js";import"./FieldError-C-XRItMF.js";import"./Text-CJ6eX-zL.js";import"./Text-XFg0ZgIN.js";import"./RSPContexts-AhW-oOA3.js";import"./Group-BvMZIYwz.js";import"./Input-CDVxcxSZ.js";import"./Hidden-_YiRnjLS.js";import"./Button-BwODYqP3.js";import"./useLabels-BZCRLtmz.js";import"./useButton-3G_DPaEV.js";import"./useTextField-DKupzS-w.js";import"./useControlledState-DWv4BEMA.js";import"./useField-1XPfFC0b.js";import"./TextField.module-suvedwZH.js";import"./Label-DCIJghw4.js";import"./Dialog-5PV4DtDS.js";import"./OverlayArrow-CRREi0sj.js";import"./useResizeObserver-CFQID2x0.js";import"./Collection-DKS4mvyp.js";import"./index-CO0eKQ8f.js";import"./Separator-BPm2hpSN.js";import"./SelectionManager-DWpnT7EH.js";import"./useEvent-CKEINn0T.js";import"./scrollIntoView-BPCWOSeZ.js";import"./SelectionIndicator-BkaQps3-.js";import"./useDescription-4VoNSCjv.js";import"./ListKeyboardDelegate-CBJTrAZi.js";import"./PressResponder-Cg0zX3k1.js";import"./useLocalizedStringFormatter-SKtJYtnG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-U4gqDdev.js";import"./VisuallyHidden-CkZ16q-g.js";import"./useLocalizedStringFormatter-D_lTOACh.js";import"./x-CwAMwMTg.js";import"./createLucideIcon-tejd7HsP.js";import"./Heading-DUlwpEsY.js";import"./info-dNwch30n.js";import"./Popover-DBnO_HMU.js";import"./Tag-BWQxhmGR.js";import"./ListBox-dO6hNHIP.js";import"./DragAndDrop-DjpyQzV6.js";import"./inertValue-Dzhaqs66.js";import"./useListState-DjqVpJ3e.js";import"./useHighlightSelectionDescription-DRuqpOdp.js";import"./useUpdateEffect-JescmLq4.js";import"./useHasTabbableChild-7ydMDL90.js";import"./check-dpQAhIf0.js";import"./ListBoxSection-CToWadNo.js";import"./Virtualizer-Buh-R24a.js";import"./chevron-down-DSWW0TuF.js";import"./Button.module-CtQ1deO8.js";import"./useToggleState-BZHXbO1z.js";const Vn={component:p,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(d,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(d,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(c,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(x,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(u,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(G,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Xn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,Xn as __namedExportsOrder,Vn as default};
