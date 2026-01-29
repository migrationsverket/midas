import{j as e}from"./iframe-esfLhqtF.js";import{$ as c}from"./Form-Cfc08rM3.js";import{G as d}from"./Grid-BDx2LCvx.js";import{G as i}from"./GridItem-Cc-2ZDuA.js";import{T as t}from"./TextField-grRsXyTP.js";import{S as l}from"./Select-C5xIlmKh.js";import{B as a}from"./Button-BnPxEc2U.js";import{R as x,a as u}from"./Radio-D-u8-tOj.js";import{C as I}from"./CheckboxGroup-CtSjyZ_C.js";import{C as G}from"./Checkbox-COk2k7Gf.js";import{L as p}from"./ListBoxItem-hXpWJjpd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-NT1QK8Yd.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CA7V4pUR.js";import"./useFocusRing-CYEh12Dg.js";import"./index-BP3Blnj0.js";import"./index-wOGaw679.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-pw2-4Cm5.js";import"./TextField-1fCLi4ym.js";import"./FieldError-DgO7HhjR.js";import"./Text-Yh0ae2Og.js";import"./Text-BLd0QilH.js";import"./RSPContexts-BCvw1NWi.js";import"./Group-DInipZTi.js";import"./Input-Xl1hFIEC.js";import"./Hidden-DfuLmxyz.js";import"./Button-CQtaCEWI.js";import"./useLabels-BNoZ-Pb6.js";import"./useButton-C-mpYoGp.js";import"./useTextField-DZveMhpa.js";import"./useControlledState-C7s2HgD5.js";import"./useField-BgwwjJzS.js";import"./TextField.module-1fNSVGjT.js";import"./Label-BW2k00Ox.js";import"./Dialog-mnLU5o9o.js";import"./OverlayArrow-Dbg0RziG.js";import"./useResizeObserver-x8dGv3P0.js";import"./Collection-DHjWa9cA.js";import"./index-DaKu8OmT.js";import"./Separator-CTPCAVsN.js";import"./SelectionManager-VPtEeFyr.js";import"./useEvent-BCwnBAuU.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CxMgDct4.js";import"./useDescription-DgLI7USw.js";import"./ListKeyboardDelegate-CMDFyksK.js";import"./PressResponder-Bwh4DBTO.js";import"./useLocalizedStringFormatter-BZtdo5t2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cc7gWlt2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-SY7lO_bO.js";import"./x-DeU5M4hf.js";import"./createLucideIcon-DYgZXBvy.js";import"./useLocalizedStringFormatter-CNz9ujRO.js";import"./Heading-CicVc4kG.js";import"./info-D7oUmn5Q.js";import"./Popover-YlR4XChL.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BRACjv3S.js";import"./DragAndDrop-C5bie9qu.js";import"./inertValue-Na84QYUU.js";import"./useListState-EzTV8l4p.js";import"./Tag-CX8YUJW6.js";import"./useHighlightSelectionDescription-DwYl2nux.js";import"./useUpdateEffect-BExJpwDC.js";import"./useHasTabbableChild-C6ub7HZQ.js";import"./chevron-down-Dr7aAzXL.js";import"./Button.module-Co5e5YHp.js";import"./check-D1YlSWmX.js";import"./useToggleState-D-EgHSnl.js";import"./Virtualizer-BN64psOP.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
