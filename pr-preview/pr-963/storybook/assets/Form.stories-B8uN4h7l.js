import{j as e}from"./iframe-BludVCPL.js";import{$ as c}from"./Form-CqW0EIvq.js";import{G as d}from"./Grid-DB1oNpAO.js";import{G as i}from"./GridItem-Bfyo-Ldc.js";import{T as t}from"./TextField-Cwq1nInD.js";import{S as l}from"./Select-Cjgi-16B.js";import{B as a}from"./Button-BMfaash4.js";import{R as x,a as u}from"./Radio-KgLA5iFH.js";import{C as I}from"./CheckboxGroup-rhaQ_Oty.js";import{C as G}from"./Checkbox-oHiR4i8_.js";import{L as p}from"./ListBoxItem-E7a8jj-A.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BoYzwdTq.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BI-Yotv_.js";import"./useFocusRing-Bo_hMFPQ.js";import"./index-nZf0-c-4.js";import"./index-CLlIRgpI.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-3p1qjqr3.js";import"./TextField-CQNdJJ13.js";import"./FieldError-Crs15S47.js";import"./Text-DjPdOjsD.js";import"./Text-4OIt-jaA.js";import"./RSPContexts-iVsZHsvb.js";import"./Group-DMs4XZk3.js";import"./Input-CYnhxUxP.js";import"./Hidden-DiUQMeVN.js";import"./Button-CjGnslnG.js";import"./useLabels-CO3fVOFf.js";import"./useButton-B0B4GjtL.js";import"./useTextField-HDrFiEGA.js";import"./useControlledState-CuHjUcW0.js";import"./useField-DYGPyTTF.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-75PW-ICK.js";import"./Dialog-NGsBiAvQ.js";import"./OverlayArrow-BB08AjEm.js";import"./useResizeObserver-DYKnm_GK.js";import"./Collection-DPwfbabj.js";import"./index-ioBwjV19.js";import"./Separator-fPHNx-_f.js";import"./SelectionManager-BJaM4A7j.js";import"./useEvent-C0paImUG.js";import"./scrollIntoView-Dnq7ttBi.js";import"./SelectionIndicator-C0xKl5-A.js";import"./useDescription-Ci4JSH0r.js";import"./ListKeyboardDelegate-DxarZjkL.js";import"./PressResponder-_BVhgS5_.js";import"./useLocalizedStringFormatter-B4WIXBM0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DUD7FXJ3.js";import"./VisuallyHidden-vUa_tkI4.js";import"./x-asknJrjS.js";import"./createLucideIcon-DcDehA1r.js";import"./useLocalizedStringFormatter-BXNZT2cC.js";import"./Heading-rKRtmMTC.js";import"./info-DgyRUCYr.js";import"./Popover-Dmdd-Cu_.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CMWIOGFg.js";import"./DragAndDrop-Y_ep4BVc.js";import"./inertValue-CxoH4_BQ.js";import"./useListState-rqMrli_y.js";import"./Tag-DsG37AO-.js";import"./useHighlightSelectionDescription-CNHW7mUJ.js";import"./useUpdateEffect-BCuxP9ga.js";import"./useHasTabbableChild-vuasKQHr.js";import"./chevron-down-4RuBVCUC.js";import"./Button.module-Co5e5YHp.js";import"./check-CL97L6-d.js";import"./useToggleState-DZzUj8Y0.js";import"./Virtualizer-CiGiUNT1.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
