import{j as e}from"./iframe-CubTBBGo.js";import{$ as c}from"./Form-DlrIIVAy.js";import{G as d}from"./Grid-BoBTb7iX.js";import{G as i}from"./GridItem-CElh6bC4.js";import{T as t}from"./TextField-CBljcWLq.js";import{S as l}from"./Select-CKymh6Tg.js";import{B as a}from"./Button-CkP2HO-W.js";import{R as x,a as u}from"./Radio-C1m77yHW.js";import{C as I}from"./CheckboxGroup-Cn65CZ1A.js";import{C as G}from"./Checkbox-BgH3y1-F.js";import{L as p}from"./ListBoxItem-BPHZU_p5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DU8A25ha.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-9VOZWhD_.js";import"./useFocusRing-lzGIxQWj.js";import"./index-C4yCgsVr.js";import"./index-CaW2QasO.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D7WluCX4.js";import"./TextField-D-6hIVTZ.js";import"./FieldError-DW_zkLWT.js";import"./Text-73NkOSuw.js";import"./Text-LbE64-eX.js";import"./RSPContexts-DwpwGrnI.js";import"./Group-jEeT0gIA.js";import"./Input-CNmDttJ8.js";import"./Hidden-GxRiQCKq.js";import"./Button-CDJANkr2.js";import"./useLabels-BNDUUXFn.js";import"./useButton-BsD5A1Wy.js";import"./useTextField-B5atWmWv.js";import"./useControlledState-B8OTRD6B.js";import"./useField-AFvgVfpl.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BR6wmk2v.js";import"./Dialog-BDG-lI8N.js";import"./OverlayArrow-D8pUe5XH.js";import"./useResizeObserver-CnAhUcv7.js";import"./Collection-SjVOhSFn.js";import"./index-Cj6z-_bn.js";import"./Separator-IUq9kbtg.js";import"./SelectionManager-Bm5mftVH.js";import"./useEvent-D8cbhnM-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-aG6BKLJi.js";import"./useDescription-hs9K73Tm.js";import"./ListKeyboardDelegate-CkPzLbVj.js";import"./PressResponder-CXfj-3xu.js";import"./useLocalizedStringFormatter-CUeB_ZYl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DW2fzw8F.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-5NlIvA6X.js";import"./x-r5WQKcoU.js";import"./createLucideIcon-Bs7Zj_V7.js";import"./useLocalizedStringFormatter-DJ2CiOfY.js";import"./Heading-BhSpU1m6.js";import"./info-CBgZdiGL.js";import"./Popover-C69Xpgdt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-2TphCbBy.js";import"./DragAndDrop-BwYnHuBd.js";import"./inertValue-DITIh4fJ.js";import"./useListState-D-a4mUiG.js";import"./Tag-CsdvKMUB.js";import"./useHighlightSelectionDescription-nyGuafvy.js";import"./useUpdateEffect-79fNnuVs.js";import"./useHasTabbableChild-n4binRBj.js";import"./chevron-down-DF9Dgg_-.js";import"./Button.module-Co5e5YHp.js";import"./check-CbnyPY70.js";import"./useToggleState-VbHctcYA.js";import"./Virtualizer-9F84lN4g.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
