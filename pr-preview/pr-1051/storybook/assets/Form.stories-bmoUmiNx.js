import{j as e}from"./iframe-BZJIgrzq.js";import{$ as c}from"./Form-Cb9oyesI.js";import{G as d}from"./Grid-DkhY3pKX.js";import{G as i}from"./GridItem-BHVBSeQt.js";import{a as x,R as u}from"./Radio-C9yxY6Zi.js";import{C as I}from"./CheckboxGroup-CMmY0Ols.js";import{C as G}from"./Checkbox-Sc4Qk340.js";import{T as t}from"./TextField-BWWAQjPb.js";import{S as l}from"./Select-Ba2CQaBA.js";import{L as p}from"./ListBoxItem-C8agWVXG.js";import{B as a}from"./Button-CLHjLMLk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDsu9e82.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CynkB5SZ.js";import"./useFocusRing-CLRJYDX3.js";import"./index-CMFY0fD_.js";import"./index-DLK3qOyE.js";import"./clsx-Ciqy0D92.js";import"./Group-BLLM6yXt.js";import"./FieldError-Xf7luySm.js";import"./Text-BCf7Uakc.js";import"./Text-CLRTBMzT.js";import"./Button-nILSV0Zl.js";import"./Hidden-BH3zIE_M.js";import"./useLabels-1qpMULhJ.js";import"./useButton-DhBm0XNi.js";import"./SelectionIndicator-BEjfesxB.js";import"./useField-MSXXK5ZP.js";import"./VisuallyHidden-C0iAQ1h6.js";import"./useControlledState-YwjV-cgx.js";import"./Label-D9cZkncG.js";import"./Dialog-CcNPSpKX.js";import"./RSPContexts-Db0C8CO2.js";import"./OverlayArrow-CSCLCtnW.js";import"./useResizeObserver-C4hmgU3I.js";import"./Collection-Bw20jmHK.js";import"./index-CHIfq2GA.js";import"./Separator-DSVl1r7I.js";import"./SelectionManager-TMotc0NR.js";import"./useEvent-8RC0B9o7.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D0LbgrVb.js";import"./ListKeyboardDelegate-C3FvELMR.js";import"./PressResponder-CM1z-dcT.js";import"./useLocalizedStringFormatter--c6s_bUB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CUc15JYj.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-4lOs2yK-.js";import"./createLucideIcon-OgUSFDFv.js";import"./useLocalizedStringFormatter-c0g796co.js";import"./Heading-Bqi4zKXZ.js";import"./info-C4LOLLvW.js";import"./Popover-DQyXc06k.js";import"./check-DsVoRjtp.js";import"./useToggleState-DG_DvitX.js";import"./TextFieldBase-CpaG_8ON.js";import"./TextField-_P-iRtX9.js";import"./Input-JnXDnz5u.js";import"./useTextField--6RFNd7w.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BIydNIUg.js";import"./DragAndDrop-C5ikiPqX.js";import"./inertValue-CUHYactK.js";import"./useListState-BT0z54yY.js";import"./Tag-V-pV8wDl.js";import"./useHighlightSelectionDescription-DQhTfTJP.js";import"./useUpdateEffect-BlpTKB2q.js";import"./useHasTabbableChild-BwKYMuhb.js";import"./chevron-down-1i4OcTB5.js";import"./Virtualizer-ChHwGJqK.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
