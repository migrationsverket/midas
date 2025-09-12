import{j as n}from"./iframe-C4zOpDmo.js";import{$ as j}from"./Form-BYD4PnVH.js";import{G}from"./Grid-DM7mGoK-.js";import{G as e}from"./GridItem-7vy_Qo9B.js";import{T as r}from"./TextField-2VrOriru.js";import{S as I}from"./Select-CWRDiomg.js";import{B as a}from"./Button-B5XXxa4j.js";import{R as g,a as b}from"./Radio-D1UL2hTt.js";import{C as h}from"./CheckboxGroup-va1axFi0.js";import{C as k}from"./Checkbox-BqDVBC0-.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CM3FGMCU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Ca2qSWBg.js";import"./useFocusRing-CYYkn1ko.js";import"./index-SZeSXddZ.js";import"./index-ghJQV6Us.js";import"./TextFieldBase-CDibLGDa.js";import"./TextField-jFoJJyhd.js";import"./FieldError-Bni_2alV.js";import"./Text-BnjhMhVk.js";import"./Text-DvngEqV9.js";import"./ListKeyboardDelegate-BRlhBtTg.js";import"./SelectionManager-BrQwy7X0.js";import"./useEvent-DCMK44Hn.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-EgPZe0-x.js";import"./useDescription-xM7FDMSw.js";import"./useControlledState-DXNGYwbF.js";import"./Group-C18q3_yj.js";import"./Input-CLSoQPCS.js";import"./Hidden-9IIPIzpX.js";import"./Button-CCOwQLb-.js";import"./useLabels-CCgTKvzn.js";import"./useButton-DDBQS4d5.js";import"./useTextField-CZgHRLym.js";import"./useField-C-AI9shR.js";import"./TextField.module-DjUItNl5.js";import"./Label-aWYV9676.js";import"./Dialog-BtJAkGsd.js";import"./RSPContexts-BLBFPz3a.js";import"./OverlayArrow-DBgCzCTJ.js";import"./useResizeObserver-C49qbIzW.js";import"./Collection-BmGO_uN5.js";import"./index-CQfKhGmE.js";import"./Separator-VTe61BcV.js";import"./PressResponder-D3bBasNM.js";import"./useLocalizedStringFormatter-B5nf6F0g.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BfGsMz1Q.js";import"./Dialog-v1yhvFkf.js";import"./useLocalizedStringFormatter-CAruyKW3.js";import"./x-BqSAmWTo.js";import"./createLucideIcon-CVso7Nq-.js";import"./Heading-YmhUM-b3.js";import"./info-qgauZDJY.js";import"./Tag-S-QOph4h.js";import"./ListBox-YGUD48HU.js";import"./DragAndDrop-71rRAQQc.js";import"./inertValue-yHdG7Qqf.js";import"./useListState-D6p2Waoq.js";import"./useHighlightSelectionDescription-BBb8tWEV.js";import"./useUpdateEffect-BDphaUbt.js";import"./useHasTabbableChild-BVTg8F0F.js";import"./check-BePx5KrH.js";import"./ListBoxSection-CE9mSAoK.js";import"./Virtualizer-BLwbn-P8.js";import"./useObserveElement-BZ0R43lk.js";import"./chevron-down-UGxXHqTR.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Douu9eQK.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
