import{j as e}from"./iframe-DcBIsMXx.js";import{c}from"./Form-BrIhRNhF.js";import{G as d}from"./Grid-CFOFndjl.js";import{G as i}from"./GridItem-Bwp0vpGT.js";import{a as x,R as u}from"./Radio-881g82PP.js";import{C as I}from"./CheckboxGroup-DpE2E3CH.js";import{C as G}from"./Checkbox-D07lcVzH.js";import{T as t}from"./TextField-aRhFSh5f.js";import{S as l}from"./Select-DycHyGho.js";import{L as p}from"./ListBoxItem-CXpYJ_XR.js";import{B as a}from"./Button-CFaNyWK_.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-D5tG7NYb.js";import"./utils-5byDKFfB.js";import"./clsx-B-dksMZM.js";import"./index-Ddy-ld7t.js";import"./index-lIHyJaf-.js";import"./clsx-Ciqy0D92.js";import"./Group-BKaapwgt.js";import"./FieldError-CA3FiWjt.js";import"./Text-DAtPV-yE.js";import"./Text-C7WBWqxX.js";import"./Button-C4Q8xd0B.js";import"./Hidden-DR2geLuk.js";import"./useLabel-Cl4TFLpj.js";import"./useLabels-x1_Sa4GJ.js";import"./useButton-CpEr-C_f.js";import"./SelectionIndicator-DwdD_WnM.js";import"./useField-wfnZ9XHu.js";import"./VisuallyHidden-ILsWu368.js";import"./useControlledState-e6Gq9Qx5.js";import"./Label-8F5laRcz.js";import"./Dialog-U0sJFBJY.js";import"./RSPContexts-CEHus4Pd.js";import"./OverlayArrow-BjjS8u_j.js";import"./useResizeObserver-CLOgJ_Vs.js";import"./Collection-D-yzekC7.js";import"./index-BJat-jgU.js";import"./Separator-Cy5KeEv1.js";import"./SelectionManager-D5cCPk2g.js";import"./useEvent-B_qpFesj.js";import"./scrollIntoView-DRKUy1YW.js";import"./useDescription-C0VBBDaG.js";import"./ListKeyboardDelegate-Ayo5OROx.js";import"./PressResponder-BKlohJgd.js";import"./useLocalizedStringFormatter-BLQND9we.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Co00YhfZ.js";import"./getScrollParent-DezxaSLv.js";import"./ModalOverlay-CYi-pCzY.js";import"./x-B6Pe-CX-.js";import"./createLucideIcon-D8sotqZ_.js";import"./useLocalizedStringFormatter-RHrCy6F9.js";import"./Heading-DfCChiXd.js";import"./info-DaSkaaYC.js";import"./Popover-B6edw5GI.js";import"./check-Djn2wj-N.js";import"./useToggleState-DErLwSFu.js";import"./TextFieldBase-XTvXPrCt.js";import"./Input-DybDWXr1.js";import"./useTextField-BeWQ-UA7.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BsSYJEYd.js";import"./DragAndDrop-C0znx_WV.js";import"./inertValue-D28JHda2.js";import"./useListState-BMlYc4Z9.js";import"./TagGroup-CPkIKV_G.js";import"./useHighlightSelectionDescription-BA2mUbhV.js";import"./useUpdateEffect-PhhB7rfK.js";import"./useHasTabbableChild-BTmHaYHi.js";import"./chevron-down-COlQxmew.js";import"./Virtualizer-CAKg-rfY.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
