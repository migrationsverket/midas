import{j as e}from"./iframe-BXrSm-hy.js";import{$ as c}from"./Form-CawK5RnY.js";import{G as d}from"./Grid-DmhZq3dm.js";import{G as i}from"./GridItem-CVay3eff.js";import{a as x,R as u}from"./Radio-DbABOkeo.js";import{C as I}from"./CheckboxGroup-Z-ariAsM.js";import{C as G}from"./Checkbox-cKHW3hkx.js";import{T as t}from"./TextField-x8yy8BTd.js";import{S as l}from"./Select-DaNxazMe.js";import{L as p}from"./ListBoxItem-BbJQQNux.js";import{B as a}from"./Button-DLjOZTyV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-m8hafyc1.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CUGfxI3J.js";import"./useFocusRing-Dolnnvn8.js";import"./index-DH1xR7sx.js";import"./index-BEWugSXc.js";import"./clsx-Ciqy0D92.js";import"./Group-DkHcBq_e.js";import"./FieldError-CDqWfdJf.js";import"./Text-D-y5Nkc_.js";import"./Text-BpOUZ-T-.js";import"./Button-QWm8aeY3.js";import"./Hidden-Bt1SQac9.js";import"./useLabels-BpFbPl_Z.js";import"./useButton-lx5Wqlq6.js";import"./SelectionIndicator-C5uXLrVT.js";import"./useField-Bft9auoy.js";import"./VisuallyHidden-CdQ2OkWx.js";import"./useControlledState-D-2kZI1H.js";import"./Label-DCh2eexd.js";import"./Dialog-B-jsIdFo.js";import"./RSPContexts-BrZ6stA1.js";import"./OverlayArrow-Tc9nsuaS.js";import"./useResizeObserver-BW9eI8vu.js";import"./Collection-V7haSTvz.js";import"./index-BfXHwUr8.js";import"./Separator-Cjx8ObZX.js";import"./SelectionManager-Ccbj1cbx.js";import"./useEvent-B4KqqYDZ.js";import"./scrollIntoView-Be-7cfO7.js";import"./useDescription-BgOqUMKe.js";import"./ListKeyboardDelegate-BnfSiAt7.js";import"./PressResponder-Byq9ymm9.js";import"./useLocalizedStringFormatter-DxuMEbeM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ce0_Z5Jv.js";import"./getScrollParent-DJrEkJWW.js";import"./x-qLqiK7s0.js";import"./createLucideIcon-DYDRqzsr.js";import"./useLocalizedStringFormatter-Dv29l914.js";import"./Heading-BGxn5ss1.js";import"./info-BOEIge97.js";import"./Popover-DlU6RgBw.js";import"./check-B0rzxJtq.js";import"./useToggleState-Ik2fKqBk.js";import"./TextFieldBase-AcXqQY9L.js";import"./Input-D-jJ0_vt.js";import"./useTextField-Bhf-IEWT.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dmj7fEpX.js";import"./DragAndDrop-vqKfUL5S.js";import"./inertValue-gw_4QprD.js";import"./useListState-CCprdfGB.js";import"./TagGroup-2gYJgm1R.js";import"./useHighlightSelectionDescription-cYR-sHTH.js";import"./useUpdateEffect-D2SJ5PwR.js";import"./useHasTabbableChild-DnmcrOVR.js";import"./chevron-down-CXwIR_QS.js";import"./Virtualizer-BckbLBgX.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
