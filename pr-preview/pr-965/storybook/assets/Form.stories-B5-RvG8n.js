import{j as e}from"./iframe-Dy8YW1nL.js";import{$ as c}from"./Form-C2Eob-dF.js";import{G as d}from"./Grid-Bieg5zsB.js";import{G as i}from"./GridItem-9xys-Oam.js";import{T as t}from"./TextField-BRqidQ9j.js";import{S as l}from"./Select-BU0YdAN7.js";import{B as a}from"./Button-B67iCngD.js";import{R as x,a as u}from"./Radio-C2x3KkKT.js";import{C as I}from"./CheckboxGroup-kzx9GyhB.js";import{C as G}from"./Checkbox-CWoPCc4z.js";import{L as p}from"./ListBoxItem-BuP34Wlb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C1iN3peK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CWizizTm.js";import"./useFocusRing-CHtYKIBZ.js";import"./index-CiKqZaPy.js";import"./index-CtsF22kH.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-gYhsM1fI.js";import"./TextField-C3Cy1-Zf.js";import"./FieldError-DyZQ-DTm.js";import"./Text-DWQpvMY3.js";import"./Text-hvN0j1za.js";import"./RSPContexts-CGLIBW7g.js";import"./Group-CAh5iPJL.js";import"./Input-B072LnZd.js";import"./Hidden-CMRF2LLs.js";import"./Button-DC3XM5t6.js";import"./useLabels-BfD0hyaw.js";import"./useButton-BzUs9u61.js";import"./useTextField-CJyRmj_B.js";import"./useControlledState-yTQyhLHt.js";import"./useField-C23ze1Dh.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ZIw0cKaI.js";import"./Dialog-B0fIVHVn.js";import"./OverlayArrow-CdekLvSf.js";import"./useResizeObserver-nI4TvI1F.js";import"./Collection-DQpYV1l7.js";import"./index-DYTqj35q.js";import"./Separator-CypzuRi1.js";import"./SelectionManager-mqjIioqG.js";import"./useEvent-CZ4JNl4C.js";import"./scrollIntoView-CvK5Pp_s.js";import"./SelectionIndicator-WMLvYsov.js";import"./useDescription-izPGNkRr.js";import"./ListKeyboardDelegate-D25woScL.js";import"./PressResponder-CeEHBSGP.js";import"./useLocalizedStringFormatter-DY5nz3IE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BDcVMAVa.js";import"./VisuallyHidden-BflTjhoa.js";import"./x-CLrlV6vH.js";import"./createLucideIcon-Dm8CZmjq.js";import"./useLocalizedStringFormatter-Bgm_EniW.js";import"./Heading-QM00-eq4.js";import"./info-Dsk6scms.js";import"./Popover-B7fnbKy0.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CyoxXDMR.js";import"./DragAndDrop-BgDk6P_A.js";import"./inertValue-eQmE3fCY.js";import"./useListState-DyAqSoT4.js";import"./Tag-Bmrofk1r.js";import"./useHighlightSelectionDescription-6sOwiSL8.js";import"./useUpdateEffect-qEIyZ-cJ.js";import"./useHasTabbableChild-B9UAxMU3.js";import"./chevron-down-CUXl6bAo.js";import"./Button.module-Co5e5YHp.js";import"./check-7t67sg-3.js";import"./useToggleState-BRp3QpsW.js";import"./Virtualizer-D3zHsXts.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
