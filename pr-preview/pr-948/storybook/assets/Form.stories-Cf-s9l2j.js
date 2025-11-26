import{j as e}from"./iframe-B_9EF7Dq.js";import{$ as c}from"./Form-BlK5Rz4M.js";import{G as d}from"./Grid-CG6qp_G3.js";import{G as i}from"./GridItem-LIreXD7_.js";import{T as t}from"./TextField-BxIL6f3l.js";import{S as l}from"./Select-ZkEe7xWB.js";import{B as a}from"./Button-v7hW0srN.js";import{R as x,a as u}from"./Radio-D-jwIQfG.js";import{C as I}from"./CheckboxGroup-DrB99c7u.js";import{C as G}from"./Checkbox-BsWEvxSa.js";import{L as p}from"./ListBoxItem-CkROnPaI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Nc7aiA8g.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-hqHE3Pmc.js";import"./useFocusRing-DIePChSt.js";import"./index-BjkNl2Dq.js";import"./index-D8NvM82z.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BXmOo6S6.js";import"./TextField-CMLyjOkA.js";import"./FieldError-BJK3SH0A.js";import"./Text-2PCYJ-aQ.js";import"./Text-DKz7R1Y9.js";import"./RSPContexts-Cr6NzFFP.js";import"./Group-B8HqE5ff.js";import"./Input-64h9h7R5.js";import"./Hidden-xunvFULB.js";import"./Button-D9HkwZ_O.js";import"./useLabels-61rfT5yO.js";import"./useButton-GH9EGPk7.js";import"./useTextField-B5C7s9vl.js";import"./useControlledState-DTUVTQNc.js";import"./useField-m_z2K0p_.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-3ouPmmU0.js";import"./Dialog-BLmPJOmf.js";import"./OverlayArrow-DmLjrALr.js";import"./useResizeObserver-DqX4n_M1.js";import"./Collection-XFQhUqFv.js";import"./index-QEbMiZIk.js";import"./Separator-CSOEmDmg.js";import"./SelectionManager-CHNFCfk4.js";import"./useEvent--ga3OshJ.js";import"./scrollIntoView-D3JBtAbF.js";import"./SelectionIndicator-D0yV6iR9.js";import"./useDescription-BXSheREr.js";import"./ListKeyboardDelegate-CIb2tA2q.js";import"./PressResponder-DddJyp0w.js";import"./useLocalizedStringFormatter-DogZXGw9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-0FPuTBqt.js";import"./VisuallyHidden-kz0xmvpU.js";import"./x-BJiEp__p.js";import"./createLucideIcon-CTuVUGjm.js";import"./useLocalizedStringFormatter-DICAckaY.js";import"./Heading-cGcChm89.js";import"./info-2jLzoUfU.js";import"./Popover-DrLVhOkq.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Deo2cX8J.js";import"./DragAndDrop-BOKX8nTm.js";import"./inertValue-BXecB-Be.js";import"./useListState-CyyTIfGz.js";import"./Tag-DQX_1BiF.js";import"./useHighlightSelectionDescription-bKrLpJi0.js";import"./useUpdateEffect-C0aeSUiC.js";import"./useHasTabbableChild-Bp3ZLNCJ.js";import"./chevron-down-By3l1O8Q.js";import"./Button.module-CtQ1deO8.js";import"./check-BRZ7p0ta.js";import"./useToggleState-0KF8Qio8.js";import"./Virtualizer-BjwtaZRb.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
