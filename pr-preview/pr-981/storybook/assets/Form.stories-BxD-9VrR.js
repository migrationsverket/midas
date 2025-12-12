import{j as e}from"./iframe-DBywrjRl.js";import{$ as c}from"./Form-BGMUpMH5.js";import{G as d}from"./Grid-BaUxEUZ6.js";import{G as i}from"./GridItem-C_1dnPvs.js";import{T as t}from"./TextField-DY4x6tse.js";import{S as l}from"./Select-C3p7m0fM.js";import{B as a}from"./Button-CSQaj_XW.js";import{R as x,a as u}from"./Radio-CGvBOVp-.js";import{C as I}from"./CheckboxGroup-dPrO_qMZ.js";import{C as G}from"./Checkbox-DrLWQ_O8.js";import{L as p}from"./ListBoxItem-DNBppzPS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C-8jxnFS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DPDjlvP6.js";import"./useFocusRing-CGlcWS9k.js";import"./index-Cpu-cEhv.js";import"./index-P3BrwvSu.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-lZYEVJWf.js";import"./TextField-DV7S8_x2.js";import"./FieldError-BNQQruOL.js";import"./Text-D38z605_.js";import"./Text-C5neFPa3.js";import"./RSPContexts-CZ2dorfb.js";import"./Group-Bmvs1NkM.js";import"./Input-Dw0YJtdA.js";import"./Hidden-79NJLlf0.js";import"./Button-D_E0QrGY.js";import"./useLabels-DRimalMh.js";import"./useButton-B7cADDRU.js";import"./useTextField-B8pznWe6.js";import"./useControlledState-CHDzfq-U.js";import"./useField-gVPT3IMc.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CdBS-jC6.js";import"./Dialog-BDl78Vuv.js";import"./OverlayArrow-oyFXlDLr.js";import"./useResizeObserver-CkCBTxIL.js";import"./Collection-5AgW_aoK.js";import"./index-DRE7QTp1.js";import"./Separator-yjBlW27q.js";import"./SelectionManager-DiyyYEzW.js";import"./useEvent-9QG8B8xJ.js";import"./scrollIntoView-DPAZbUL2.js";import"./SelectionIndicator-kuF2SRU2.js";import"./useDescription-BkB7oLNC.js";import"./ListKeyboardDelegate-BQyLRtPA.js";import"./PressResponder-sWsumx_-.js";import"./useLocalizedStringFormatter-CSTI3d-a.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DnWvmp_C.js";import"./VisuallyHidden-jGgGT3kZ.js";import"./x-CMTwpFUB.js";import"./createLucideIcon-DLAcgX9Y.js";import"./useLocalizedStringFormatter-x3VZR5IH.js";import"./Heading-rY-wDdYP.js";import"./info-D4TVZB6L.js";import"./Popover-CvPJ9zn-.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-jUVheS2E.js";import"./DragAndDrop-CCesHT3P.js";import"./inertValue-CxqS18AX.js";import"./useListState-C6HWZUCt.js";import"./Tag-BthCxC1b.js";import"./useHighlightSelectionDescription-Bj2kaI9_.js";import"./useUpdateEffect-DAZvmjqR.js";import"./useHasTabbableChild-B0MGWK-I.js";import"./chevron-down-DXZf1FNk.js";import"./Button.module-Co5e5YHp.js";import"./check-DUWMPDVS.js";import"./useToggleState-BAQnU5xS.js";import"./Virtualizer-Dee8ODLT.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
