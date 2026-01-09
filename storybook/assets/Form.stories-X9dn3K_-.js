import{j as e}from"./iframe-DBhQ8ZfE.js";import{$ as c}from"./Form-COD5heDD.js";import{G as d}from"./Grid-DKKchDCd.js";import{G as i}from"./GridItem-DpyU2b5b.js";import{T as t}from"./TextField-t8-m5M3X.js";import{S as l}from"./Select-BDmKA1MV.js";import{B as a}from"./Button-aFOEdS9y.js";import{R as x,a as u}from"./Radio-CnfBGgF4.js";import{C as I}from"./CheckboxGroup-Cm3Ysouq.js";import{C as G}from"./Checkbox-Bnk4NbY5.js";import{L as p}from"./ListBoxItem-s8JsZ7oa.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CV2hteiq.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B0Ezuj_R.js";import"./useFocusRing-2NmEPi_N.js";import"./index-CY38OC3k.js";import"./index-Dn-wkp9J.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BuQX6Xjp.js";import"./TextField-CQGhErrN.js";import"./FieldError-CBIHh_VV.js";import"./Text-B7pj2ymj.js";import"./Text-ByOBhr0y.js";import"./RSPContexts-CiHCTwCW.js";import"./Group-BShwi2v5.js";import"./Input-CB9tjmC9.js";import"./Hidden-BD34b6Sf.js";import"./Button-BkJQBN-z.js";import"./useLabels-C-hTBXSR.js";import"./useButton-6CFw4W9G.js";import"./useTextField-DC4rFzr4.js";import"./useControlledState-DTSOZ1sm.js";import"./useField-Dqufr6FC.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CC7TLxk-.js";import"./Dialog-qttM7F0n.js";import"./OverlayArrow-CfDzyuH5.js";import"./useResizeObserver-B6lvwgtI.js";import"./Collection-WipRWROd.js";import"./index-BjpqmIXJ.js";import"./Separator-dWfWGgWB.js";import"./SelectionManager-DIxKGDaq.js";import"./useEvent--vbCSqK6.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DY8WkhgT.js";import"./useDescription-BdlPH_Ut.js";import"./ListKeyboardDelegate-CnB4GnLU.js";import"./PressResponder-VnRiehAJ.js";import"./useLocalizedStringFormatter-DMxV2bdQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bfq_HOSC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B0hr9uCQ.js";import"./x--mWXCQyN.js";import"./createLucideIcon-DPyGDXBW.js";import"./useLocalizedStringFormatter-BnEeM0Eu.js";import"./Heading--CMmhAbi.js";import"./info-DRO2txNo.js";import"./Popover-BVmWUEvu.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-0OaetGJD.js";import"./DragAndDrop-BqSwVyRX.js";import"./inertValue-DHON7iGr.js";import"./useListState-BYAlklsF.js";import"./Tag-HbPqOm94.js";import"./useHighlightSelectionDescription-6mF8rXtP.js";import"./useUpdateEffect-2WfNUchD.js";import"./useHasTabbableChild-C_mWvSJi.js";import"./chevron-down-DVVf0E-m.js";import"./Button.module-Co5e5YHp.js";import"./check-CCVjdgEX.js";import"./useToggleState-XH9AIQtV.js";import"./Virtualizer-BnKnx9c9.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
