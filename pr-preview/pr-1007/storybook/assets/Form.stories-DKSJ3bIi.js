import{j as e}from"./iframe-JacAhoxH.js";import{$ as c}from"./Form-C4wPVDJ-.js";import{G as d}from"./Grid-BSmWnhMD.js";import{G as i}from"./GridItem-M29-007v.js";import{T as t}from"./TextField-WkgShN5M.js";import{S as l}from"./Select-CPCQ7PM4.js";import{B as a}from"./Button-BzRYHKPq.js";import{R as x,a as u}from"./Radio-DRaqJOt8.js";import{C as I}from"./CheckboxGroup-CPjLwk9s.js";import{C as G}from"./Checkbox-twXhb24h.js";import{L as p}from"./ListBoxItem-DNL6lNL6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CzU_JO7s.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BoVDv6Cp.js";import"./useFocusRing-spbXnPSy.js";import"./index-GcjV-LxB.js";import"./index-YZL0u5uz.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-pYxMkQJX.js";import"./TextField-C5Ls2LmB.js";import"./FieldError-B7rWxW-L.js";import"./Text-Edn7JPzd.js";import"./Text-MKVpmyfV.js";import"./RSPContexts-9Rf4wLRU.js";import"./Group-C2so4Pc_.js";import"./Input-Cuz7kykP.js";import"./Hidden-TGIGvYu7.js";import"./Button-8pJehvb2.js";import"./useLabels-7kgjtqhP.js";import"./useButton-BIrYoUZu.js";import"./useTextField-D8hJgexU.js";import"./useControlledState-p5pbSUwu.js";import"./useField-DEF7di_w.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-poos_zJX.js";import"./Dialog-CiOrT5e8.js";import"./OverlayArrow-DRAhygSP.js";import"./useResizeObserver-Buog1A5Y.js";import"./Collection--Knj5lbP.js";import"./index-DkwG0OeZ.js";import"./Separator-BERTsdg-.js";import"./SelectionManager-35kh4I0S.js";import"./useEvent-Dax9vfKX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C0R_2rsV.js";import"./useDescription-OQy-vlPi.js";import"./ListKeyboardDelegate-B_SUvSkL.js";import"./PressResponder-B63eX99g.js";import"./useLocalizedStringFormatter-CwYPGFUg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-I0gpbv_D.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-TrlJd0AM.js";import"./x-nQG_nTms.js";import"./createLucideIcon-DGoL-s5C.js";import"./useLocalizedStringFormatter-BG_WIZXv.js";import"./Heading-C046WmVv.js";import"./info-BOq2dC_7.js";import"./Popover-Bl_YCtHe.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CJSv0_Y-.js";import"./DragAndDrop-DMBHicHO.js";import"./inertValue-BDFRLFrK.js";import"./useListState-BblsbjK6.js";import"./Tag-CczhbraW.js";import"./useHighlightSelectionDescription-Dx6LFPAm.js";import"./useUpdateEffect-Cr7IJFqk.js";import"./useHasTabbableChild-DgnCfBI9.js";import"./chevron-down-ByB6LH0_.js";import"./Button.module-Co5e5YHp.js";import"./check-2AeKoN78.js";import"./useToggleState-DBmUKe5N.js";import"./Virtualizer-CV5c4BoK.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
