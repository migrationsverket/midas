import{j as n}from"./iframe-hDtBDR1c.js";import{$ as j}from"./Form-BTyQh2Vr.js";import{G}from"./Grid-Clc2pn2D.js";import{G as e}from"./GridItem-CVl8LanQ.js";import{T as r}from"./TextField-Brr7drMV.js";import{S as I}from"./Select-dAUplF8u.js";import{B as a}from"./Button-Tvn-OE65.js";import{R as g,a as b}from"./Radio-D4-EIDuG.js";import{C as h}from"./CheckboxGroup-CCF12Xz9.js";import{C as k}from"./Checkbox-DHFZP1CH.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BcHjSfM0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Q45hkJ49.js";import"./useFocusRing-Csg--o-C.js";import"./index-DJ1gCrw8.js";import"./index-B77ei32X.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DBLURGQM.js";import"./TextField-y8n3lOD6.js";import"./FieldError-0NSCOC7J.js";import"./Text-Kws7xylb.js";import"./Text-B-bLeqyN.js";import"./RSPContexts-CbMfB2-4.js";import"./Group-Bh9l7wio.js";import"./Input-_oG3b4K8.js";import"./Hidden-BIIPF4tn.js";import"./Button-D3mZNJja.js";import"./useLabels-CzownRkl.js";import"./useButton-Cl9E8kJl.js";import"./useTextField-BVa459ir.js";import"./useControlledState-BniQRER_.js";import"./useField-BB5LgRC0.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BEdcUb0r.js";import"./Dialog-CyFNcnRD.js";import"./OverlayArrow-vdBT2_Dn.js";import"./useResizeObserver-DPbA-6Cy.js";import"./Collection-DTNcbD5d.js";import"./index--jhKlJ4M.js";import"./Separator-CVpdzjYb.js";import"./SelectionManager-BA7JmOVY.js";import"./useEvent-rIZfVoNV.js";import"./scrollIntoView-BgB9ZOZt.js";import"./SelectionIndicator-DK6KpJSG.js";import"./useDescription-wVhC8iEI.js";import"./ListKeyboardDelegate-Dk0Umf_8.js";import"./PressResponder-BOUe0EL1.js";import"./useLocalizedStringFormatter-DAMkbIpM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-B5t7_nZ5.js";import"./VisuallyHidden-qCWUEN24.js";import"./useLocalizedStringFormatter-BoRvwLP1.js";import"./x-fkQfJsdV.js";import"./createLucideIcon-C7Pz6SM8.js";import"./Heading-BSDgbPgZ.js";import"./info-DgxmIsOw.js";import"./Popover-DWT_IrsU.js";import"./Tag-OE9fpSar.js";import"./ListBox-NuyoeAT2.js";import"./DragAndDrop-Bm1YZ5Wl.js";import"./inertValue-Q7y-sb1y.js";import"./useListState-DSOb1V22.js";import"./useHighlightSelectionDescription-9H-DquXJ.js";import"./useUpdateEffect-Br308fw_.js";import"./useHasTabbableChild-nL7wDTSC.js";import"./check-DnW5bB6c.js";import"./ListBoxSection-PaI7PBUG.js";import"./Virtualizer-BS2aLuF1.js";import"./chevron-down-BvzZvpZO.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-B-3dO539.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
