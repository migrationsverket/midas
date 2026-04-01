import{j as e}from"./iframe-BcVWnjiq.js";import{c}from"./Form-Bki39RKU.js";import{G as d}from"./Grid-CxGxD-qB.js";import{G as i}from"./GridItem-BPEd_iy8.js";import{a as x,R as u}from"./Radio-BONJJdTi.js";import{C as I}from"./CheckboxGroup-Bb_TjLn2.js";import{C as G}from"./Checkbox-7TaD0QSp.js";import{T as t}from"./TextField-CJdEGLlg.js";import{S as l}from"./Select-Clch0Yb1.js";import{L as p}from"./ListBoxItem-BE6PI4s1.js";import{B as a}from"./Button-aD9_wGcx.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Cr43T2xz.js";import"./utils-BHfrMThS.js";import"./clsx-B-dksMZM.js";import"./index-Bf6BaTQp.js";import"./index-lTGn0qSi.js";import"./clsx-Ciqy0D92.js";import"./Group-DnSo1KJl.js";import"./FieldError-RgIIuEHk.js";import"./Text-Cf3_Dpr9.js";import"./Text-aEiNTvlh.js";import"./Button-X_O9ad-3.js";import"./Hidden-B1e2ot4t.js";import"./useLabel-CdT-X_Un.js";import"./useLabels-H_5_YSkD.js";import"./useButton-CJEr5rsL.js";import"./SelectionIndicator-BxX3y6YC.js";import"./useField-Dhrmud0j.js";import"./VisuallyHidden-DQYzeIJf.js";import"./useControlledState-BeIEKiqF.js";import"./Label-fjbbzU9N.js";import"./Dialog-DhZAIFeO.js";import"./RSPContexts-DwUzfd_N.js";import"./OverlayArrow-BhulQ_tx.js";import"./useResizeObserver-Ck_GSI3T.js";import"./Collection-BGh5CUSO.js";import"./index-DAeJWrLP.js";import"./Separator-DctYVSTw.js";import"./SelectionManager-y-xBPN-9.js";import"./useEvent-CtZW5Qvu.js";import"./scrollIntoView-CeKJisls.js";import"./useDescription-cF75q-Hq.js";import"./ListKeyboardDelegate-C98MwhU0.js";import"./PressResponder-DN1lj42U.js";import"./useLocalizedStringFormatter-BzQp9VXy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYSUuiTn.js";import"./getScrollParent-dSYNY5k0.js";import"./x-B_mInUxe.js";import"./createLucideIcon-DKRKL4qZ.js";import"./useLocalizedStringFormatter-BGPexIt5.js";import"./Heading-DzN1JGdH.js";import"./info-ELtIys0V.js";import"./Popover-Yn8LFCCD.js";import"./check-CsvvCU4m.js";import"./useToggleState-xvRUJtpF.js";import"./TextFieldBase-CuwdaifK.js";import"./Input-DeQXhFoY.js";import"./useTextField-WgrE_jSW.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BKNhOHU9.js";import"./DragAndDrop-DLJ6xBma.js";import"./inertValue-03XHyI7T.js";import"./useListState-BfdQ6kW0.js";import"./TagGroup-DwowZYtL.js";import"./useHighlightSelectionDescription-Dk6TqolI.js";import"./useUpdateEffect-DEIDvvml.js";import"./useHasTabbableChild-oEFiu3Bm.js";import"./chevron-down-CkycqvyI.js";import"./Virtualizer-CjwuHibF.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
