import{j as e}from"./iframe-no9CntvV.js";import{$ as c}from"./Form-CF35t9b0.js";import{G as d}from"./Grid-DSP49OSX.js";import{G as i}from"./GridItem-BNzZ_ytQ.js";import{T as t}from"./TextField-Q_r7TgRW.js";import{S as l}from"./Select-D2vZpZWV.js";import{B as a}from"./Button-LFMtXpU7.js";import{R as x,a as u}from"./Radio-CjddyMEV.js";import{C as I}from"./CheckboxGroup-o7-B5Xrj.js";import{C as G}from"./Checkbox-BT0Nl2wW.js";import{L as p}from"./ListBoxItem-BI_dQ2Hv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B6AasQkX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CFAIF2Ue.js";import"./useFocusRing-pveG4jA-.js";import"./index-DvXDbTU2.js";import"./index-DEYREeZj.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BtZUbMl4.js";import"./TextField-CvHSbnXe.js";import"./FieldError-sDyen7ng.js";import"./Text-BpKcKBtM.js";import"./Text-BGa0l0Rh.js";import"./RSPContexts-Cef-5t5s.js";import"./Group-BpeFlo06.js";import"./Input-CnBII4gJ.js";import"./Hidden-CFcjd9Ye.js";import"./Button-Deq-w1A_.js";import"./useLabels-BIymkZE6.js";import"./useButton-C4GsfKwP.js";import"./useTextField-Dd6YmX9K.js";import"./useControlledState-DxYknQDv.js";import"./useField-Cd0Sc82B.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DCsjk68R.js";import"./Dialog-YHzPU4Xt.js";import"./OverlayArrow-Bbx4ZvUL.js";import"./useResizeObserver-CMciYl8W.js";import"./Collection-CvCI3D99.js";import"./index-ngfcFwBD.js";import"./Separator-D6RPw9Yg.js";import"./SelectionManager-C4zMqpui.js";import"./useEvent-DgT1RkyW.js";import"./scrollIntoView-BVD0fCXS.js";import"./SelectionIndicator-CA-oSTYQ.js";import"./useDescription-Cspf3mhS.js";import"./ListKeyboardDelegate-DI0yyyLq.js";import"./PressResponder-mfl91F1s.js";import"./useLocalizedStringFormatter-BdwuPI9T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-5zfS10KG.js";import"./VisuallyHidden-BIFAjTF4.js";import"./x-BdQk_ya-.js";import"./createLucideIcon-DGuN_Rm2.js";import"./useLocalizedStringFormatter-Dz0tCMy5.js";import"./Heading-Bbqsli7f.js";import"./info-DeGxmpr8.js";import"./Popover-C-OJvxMh.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BswyWuSb.js";import"./DragAndDrop-Bc_DCtgQ.js";import"./inertValue-Bi-oBqD0.js";import"./useListState-CzAMHXts.js";import"./Tag-d9QPXOof.js";import"./useHighlightSelectionDescription-DWl_NEJD.js";import"./useUpdateEffect-BjdrVpTZ.js";import"./useHasTabbableChild-B1HTjdu0.js";import"./chevron-down-Dsy4S8zQ.js";import"./Button.module-CtQ1deO8.js";import"./check-BDIE8hTx.js";import"./useToggleState-BksnuBV4.js";import"./Virtualizer-Cn7nBAW6.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
