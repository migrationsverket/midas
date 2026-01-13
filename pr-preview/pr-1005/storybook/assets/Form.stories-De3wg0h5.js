import{j as e}from"./iframe-CvVfZMju.js";import{$ as c}from"./Form-DfNI4Fyj.js";import{G as d}from"./Grid-BWqKjxKF.js";import{G as i}from"./GridItem-CtedsHSJ.js";import{T as t}from"./TextField-BNOyO1Ha.js";import{S as l}from"./Select-B7l3iLZX.js";import{B as a}from"./Button-gfNGwmaI.js";import{R as x,a as u}from"./Radio-CI4k4wvz.js";import{C as I}from"./CheckboxGroup-C8HDqmIA.js";import{C as G}from"./Checkbox-C8mrH0Hx.js";import{L as p}from"./ListBoxItem-CC2DIym9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DWYdFJkQ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BwiqiVUx.js";import"./useFocusRing-C0LhZ78-.js";import"./index-D7941otZ.js";import"./index-Pshk4pH4.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CS5ZKLFe.js";import"./TextField-Bq1dhlvQ.js";import"./FieldError-AGivlbvG.js";import"./Text-BvmLx5Jg.js";import"./Text-Bu-h3aGF.js";import"./RSPContexts-BqDomoxP.js";import"./Group-DkQ4se4v.js";import"./Input-cwVTspUI.js";import"./Hidden-BEb8_Y6y.js";import"./Button-KsvyKPrf.js";import"./useLabels-CsWyYT6N.js";import"./useButton-DjfUH4ri.js";import"./useTextField-B3IPHEtb.js";import"./useControlledState-CMGDh5hi.js";import"./useField-D7GoXrYm.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CH95ECVi.js";import"./Dialog-CLJNDqU0.js";import"./OverlayArrow-DCWn89kD.js";import"./useResizeObserver-CPf7A2Ov.js";import"./Collection-BDO9FB8m.js";import"./index-Be3mLtxT.js";import"./Separator-J9VHNJ6_.js";import"./SelectionManager-CrGONw2O.js";import"./useEvent-BGpVX2rC.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DgJevlzU.js";import"./useDescription-CKnbeb1h.js";import"./ListKeyboardDelegate-Cy2WhaSY.js";import"./PressResponder-DE_lcgFv.js";import"./useLocalizedStringFormatter-BRwLdyH3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKu9FEZm.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CuujIUMO.js";import"./x-B5IewCPb.js";import"./createLucideIcon-CL0pNCrf.js";import"./useLocalizedStringFormatter-JqvndrtF.js";import"./Heading-C9B0QyBV.js";import"./info-B9anievW.js";import"./Popover-BIZycej8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bw7QyniW.js";import"./DragAndDrop-Cxv57MY0.js";import"./inertValue-BZnGGNCx.js";import"./useListState-2HPtNN_X.js";import"./Tag-9F1CkRlR.js";import"./useHighlightSelectionDescription-De75rUxq.js";import"./useUpdateEffect-CsGlbp3r.js";import"./useHasTabbableChild-BYnFPEX9.js";import"./chevron-down-CPqNfC2w.js";import"./Button.module-Co5e5YHp.js";import"./check-CI-8h2dG.js";import"./useToggleState-CBr5iG_d.js";import"./Virtualizer-D3Kt7qeA.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
