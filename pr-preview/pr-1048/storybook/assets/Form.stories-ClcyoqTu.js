import{j as e}from"./iframe-B46k8Jp-.js";import{$ as c}from"./Form-k6tpHfuL.js";import{G as d}from"./Grid-mJ_gtfd8.js";import{G as i}from"./GridItem-CWlNEC2z.js";import{a as x,R as u}from"./Radio-DS_3DK4E.js";import{C as I}from"./CheckboxGroup-CeO1jIzZ.js";import{C as G}from"./Checkbox-DjUEQ4wy.js";import{T as t}from"./TextField-Bd5yBusT.js";import{S as l}from"./Select-BvuSDPUj.js";import{L as p}from"./ListBoxItem-BrICzAuu.js";import{B as a}from"./Button-CPDizGhA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D8o13i-0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bno76pJS.js";import"./useFocusRing-DkIdhDSx.js";import"./index-BNL-dXtG.js";import"./index-D8Bk77PH.js";import"./clsx-Ciqy0D92.js";import"./Group-DlVRjEQ-.js";import"./FieldError-VsuqZb_G.js";import"./Text-BkyBG04s.js";import"./Text-BjNkUFcW.js";import"./Button-DeinXWVf.js";import"./Hidden-CFqGg0VD.js";import"./number-DfkVkf0F.js";import"./useLabels-DW9kmzSX.js";import"./useButton-B5s3hE2o.js";import"./SelectionIndicator-BgTrKU_H.js";import"./useField-CXG2aLYx.js";import"./VisuallyHidden-Bnc_oVlh.js";import"./useControlledState-BtITM9-4.js";import"./Label-DhG94hQk.js";import"./Dialog-D7H4rQV8.js";import"./RSPContexts-BmEJNEMw.js";import"./OverlayArrow-Dl60MgVx.js";import"./useResizeObserver-Br_R3Qlm.js";import"./Collection-CssY9qLp.js";import"./index-l8QBXIuE.js";import"./Separator-C84gbwpp.js";import"./SelectionManager-VtK9-ztp.js";import"./useEvent-BacgC5LG.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BoBzwRVp.js";import"./ListKeyboardDelegate-DGcjUW6o.js";import"./PressResponder-D37iDMaO.js";import"./useLocalizedStringFormatter-DswGCIZV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CTLvTmjQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BMIcm1JC.js";import"./createLucideIcon-FljtlaXo.js";import"./useLocalizedStringFormatter-D_eLZdxP.js";import"./Heading-D_Yq3rRt.js";import"./info-Be_yB4Cz.js";import"./Popover-9HCi7szZ.js";import"./check-tl7BUE2a.js";import"./useToggleState-5TtqvLKL.js";import"./TextFieldBase-ClXtP_H-.js";import"./Input-DEb4uzI0.js";import"./useTextField-BNnhM8Yn.js";import"./TextField.module-Ck-VtJ3k.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cf5J27t5.js";import"./DragAndDrop-C3q9ZUHC.js";import"./inertValue-CRMIx_A5.js";import"./useListState-6wWVjIxH.js";import"./TagGroup-C_v6GYJf.js";import"./useHighlightSelectionDescription--KoarGR7.js";import"./useUpdateEffect-BOpkoIqE.js";import"./useHasTabbableChild-CRkcbCH_.js";import"./chevron-down-Bc4cBt2A.js";import"./Virtualizer-DtGqCzaH.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
