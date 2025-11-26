import{j as e}from"./iframe-07RTUryM.js";import{$ as c}from"./Form-Bg3oU93k.js";import{G as d}from"./Grid-BM5-EYuL.js";import{G as i}from"./GridItem-DKtguJ2X.js";import{T as t}from"./TextField-02pm3Hkw.js";import{S as l}from"./Select-13CqO1hw.js";import{B as a}from"./Button-Bog976hN.js";import{R as x,a as u}from"./Radio-uy32_Vwp.js";import{C as I}from"./CheckboxGroup-A1zIL3wR.js";import{C as G}from"./Checkbox-DJ0Qi3UE.js";import{L as p}from"./ListBoxItem-CppZ2nVM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DDlZCoEX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BzmuUnZ8.js";import"./useFocusRing-COYx92Jj.js";import"./index-BcjdZjMV.js";import"./index-D6uG8lGX.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CNeJWpcK.js";import"./TextField-CPvZe0f2.js";import"./FieldError-BmLNCWmj.js";import"./Text-CFGS2jnp.js";import"./Text-5bsUq1RJ.js";import"./RSPContexts-Cz-G6zUG.js";import"./Group-DmfhIqlB.js";import"./Input-DgGlF8Ub.js";import"./Hidden-DkxnzuZ8.js";import"./Button-Dv0y-JoZ.js";import"./useLabels-DD2GJFDM.js";import"./useButton-B55nQo6r.js";import"./useTextField-D_2nfVke.js";import"./useControlledState-Cs7nFh0s.js";import"./useField-xDB56E6O.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-C0vUzMAR.js";import"./Dialog-C92XYQFG.js";import"./OverlayArrow-BnlShkCD.js";import"./useResizeObserver-2mY5lHnH.js";import"./Collection-Bqjq0FKg.js";import"./index-LXNm5jM6.js";import"./Separator-EoupohYG.js";import"./SelectionManager-BUEZ8fPb.js";import"./useEvent-Bu-Z66ye.js";import"./scrollIntoView-J_HIj5YT.js";import"./SelectionIndicator-CQgF41ZE.js";import"./useDescription-B5YWaF2b.js";import"./ListKeyboardDelegate-COL_K4eM.js";import"./PressResponder-BZbfZcU6.js";import"./useLocalizedStringFormatter-C5QLgnKh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BVpU91Lz.js";import"./VisuallyHidden-Cm74pgqq.js";import"./x-DYmOm4A6.js";import"./createLucideIcon-BoFHMCBo.js";import"./useLocalizedStringFormatter-B39D6IqO.js";import"./Heading-DkJBZZSw.js";import"./info-CbfQfqH5.js";import"./Popover-9ucJesFL.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D2hgPgHC.js";import"./DragAndDrop-DKlt-nz3.js";import"./inertValue-C0Z5JwNH.js";import"./useListState-BAEHvs31.js";import"./Tag-DRsqF7xY.js";import"./useHighlightSelectionDescription-D__JSL6w.js";import"./useUpdateEffect-DRNbjVLc.js";import"./useHasTabbableChild-BXHQGGoq.js";import"./chevron-down-cSa4Udul.js";import"./Button.module-CtQ1deO8.js";import"./check-D9ztjfWf.js";import"./useToggleState-DJeickMM.js";import"./Virtualizer-CO5cHPFL.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
