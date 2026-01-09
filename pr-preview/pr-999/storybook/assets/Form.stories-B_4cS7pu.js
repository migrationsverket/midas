import{j as e}from"./iframe-nE4dm88Z.js";import{$ as c}from"./Form-Bmoffjj9.js";import{G as d}from"./Grid-BHGcLhQl.js";import{G as i}from"./GridItem-Br2StXiD.js";import{T as t}from"./TextField-CL3lzH0s.js";import{S as l}from"./Select-CsxdflNa.js";import{B as a}from"./Button-CXDEkB4j.js";import{R as x,a as u}from"./Radio-BU4-H8Sg.js";import{C as I}from"./CheckboxGroup-CwyStr21.js";import{C as G}from"./Checkbox-UwHuLGGw.js";import{L as p}from"./ListBoxItem-B-ZPHugS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D6BHXFFk.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C6QvPBXN.js";import"./useFocusRing-CHzcFtFU.js";import"./index-DogyMJnz.js";import"./index-DUvPe5TJ.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Cl-2VHT-.js";import"./TextField-DUTkcN_I.js";import"./FieldError-Dawq3Gkj.js";import"./Text-DiUExjYu.js";import"./Text-Cx_6NWCd.js";import"./RSPContexts-B3rIMyAq.js";import"./Group-aJjn_8pX.js";import"./Input-CwjmEI8O.js";import"./Hidden-B5zipMeH.js";import"./Button-B3APOlWO.js";import"./useLabels-h0Q5hm8W.js";import"./useButton-Dgl5rK7P.js";import"./useTextField-BKQ5h-hw.js";import"./useControlledState-Da3ywIgU.js";import"./useField-B9aIp0ru.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DOA5ScxT.js";import"./Dialog-BmRoZ4Ke.js";import"./OverlayArrow-cBSsDxtF.js";import"./useResizeObserver-C0_9yGsU.js";import"./Collection-Iss9Z0nH.js";import"./index-Bf6Qc5MO.js";import"./Separator-DdeiSrR7.js";import"./SelectionManager-BgXzqmfx.js";import"./useEvent-BFPzvfby.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D-p60_16.js";import"./useDescription-tK3CsJ4R.js";import"./ListKeyboardDelegate-De05int2.js";import"./PressResponder-_wkhWPhg.js";import"./useLocalizedStringFormatter-BZ1dBZg4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CWglpiz9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-t4WqRTpg.js";import"./x-BAGrW2Pg.js";import"./createLucideIcon-DoBEpZId.js";import"./useLocalizedStringFormatter-CURwqrMK.js";import"./Heading-DSicriFW.js";import"./info-gV5W-sy8.js";import"./Popover-BIz2MXJk.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DSYsPRHH.js";import"./DragAndDrop-CqUpU9D6.js";import"./inertValue-Du0_-k7R.js";import"./useListState-DI7mBTCV.js";import"./Tag-D4dwoOsL.js";import"./useHighlightSelectionDescription-CEc76Yuf.js";import"./useUpdateEffect-uzslBu2h.js";import"./useHasTabbableChild-DynZXeWS.js";import"./chevron-down-D2VMRmn6.js";import"./Button.module-Co5e5YHp.js";import"./check-_MtMyea7.js";import"./useToggleState-BGET6xrE.js";import"./Virtualizer-LYfQHc3H.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
