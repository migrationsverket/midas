import{j as e}from"./iframe-B_KOJ0G0.js";import{$ as c}from"./Form-WL1-LyKP.js";import{G as d}from"./Grid-ne8KH06h.js";import{G as i}from"./GridItem-Co4z6uO1.js";import{T as t}from"./TextField-BXxm8GYS.js";import{S as l}from"./Select-TA8IQQpf.js";import{B as a}from"./Button-Drf_ZmSl.js";import{R as x,a as u}from"./Radio-C_KmwUFa.js";import{C as I}from"./CheckboxGroup-C3j_afJv.js";import{C as G}from"./Checkbox-BHxaR2NS.js";import{L as p}from"./ListBoxItem-DoC84q9T.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BTtkoL8i.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CTGgOiwX.js";import"./useFocusRing-5nURZfN9.js";import"./index-CXgWkQzh.js";import"./index-CF3jB36m.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BDGFvFW8.js";import"./TextField-DMsOiVBO.js";import"./FieldError-DUwoG9cu.js";import"./Text-D3GHA6gq.js";import"./Text-ZOMm-Alb.js";import"./RSPContexts-CbVBvrS_.js";import"./Group-9n05wolw.js";import"./Input-CGF4D6dv.js";import"./Hidden-B9DtuNar.js";import"./Button-CnpoiceM.js";import"./useLabels-FMAmdZ1G.js";import"./useButton-DkRmfz4B.js";import"./useTextField-CzctXWtj.js";import"./useControlledState-CTR0ps1O.js";import"./useField-BD0VU8YG.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BkPBTg7u.js";import"./Dialog-CJGg_q5A.js";import"./OverlayArrow-DMFwF3Tj.js";import"./useResizeObserver-BCTsMvHc.js";import"./Collection-qBAPm5HX.js";import"./index-CKx1Vqp3.js";import"./Separator-awFrDq_W.js";import"./SelectionManager-D_LDUR9m.js";import"./useEvent-DxD1kQt5.js";import"./scrollIntoView-BwfxgBXt.js";import"./SelectionIndicator-GcCYW7bK.js";import"./useDescription-7M9C1DQ3.js";import"./ListKeyboardDelegate-BPFL0eMh.js";import"./PressResponder-Bk_mNxXq.js";import"./useLocalizedStringFormatter-DGPkZ-8S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DfLYi2pS.js";import"./VisuallyHidden-C9mO_RkX.js";import"./x-t-f0L9zQ.js";import"./createLucideIcon-C0reiAmG.js";import"./useLocalizedStringFormatter-v4d1yczo.js";import"./Heading-D-1uIkeo.js";import"./info-C3UuH5jm.js";import"./Popover-Br_CJh4y.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-t3WsUuVw.js";import"./DragAndDrop-W0rUryKX.js";import"./inertValue-CIXLHyuT.js";import"./useListState-B2sbUldP.js";import"./Tag-CIoYUEBQ.js";import"./useHighlightSelectionDescription-Be2txKeR.js";import"./useUpdateEffect-bAt_xAjm.js";import"./useHasTabbableChild-Bf5rB8ty.js";import"./chevron-down-BhoHt-iR.js";import"./Button.module-CtQ1deO8.js";import"./check-DXkoIzHV.js";import"./useToggleState-Dnz_0DCm.js";import"./Virtualizer-baAMJhJJ.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
