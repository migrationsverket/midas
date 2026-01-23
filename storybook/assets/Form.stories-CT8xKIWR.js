import{j as e}from"./iframe-d-FQpM90.js";import{$ as c}from"./Form-OKrhR-Fj.js";import{G as d}from"./Grid-VtYkFaA6.js";import{G as i}from"./GridItem-OpHxTYE9.js";import{T as t}from"./TextField-2SqxQXSi.js";import{S as l}from"./Select-BbQSdCZr.js";import{B as a}from"./Button-XCmFSPiU.js";import{R as x,a as u}from"./Radio-Dme2PHPO.js";import{C as I}from"./CheckboxGroup-Cm_ql8wC.js";import{C as G}from"./Checkbox-kMvjCO5W.js";import{L as p}from"./ListBoxItem-D618nBSy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CTrWZFVM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BW7mP-sh.js";import"./useFocusRing-DI4CuVxJ.js";import"./index-Ccbx2rrI.js";import"./index-B0n8z5FV.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BjhlpKDm.js";import"./TextField-Dh7xtOdE.js";import"./FieldError-BjEJz6Ju.js";import"./Text-BU1xEAD-.js";import"./Text-CFvohxCr.js";import"./RSPContexts-36mIdLbY.js";import"./Group-MbYdlPwH.js";import"./Input-W61327aJ.js";import"./Hidden-D7DESwR-.js";import"./Button-CQtK7RQv.js";import"./useLabels-DCiGcPnN.js";import"./useButton-ONss29nc.js";import"./useTextField-DHoUcAfH.js";import"./useControlledState-DT8flL-3.js";import"./useField-BNyzTKfn.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BGWBVbed.js";import"./Dialog-CmoCzVsf.js";import"./OverlayArrow-VLifoHbe.js";import"./useResizeObserver-7Eq5Fixd.js";import"./Collection-CjZd06bD.js";import"./index-D54MaNBW.js";import"./Separator-BwJQIZlo.js";import"./SelectionManager-DbVn8V7O.js";import"./useEvent-CkmhN7CQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B_S-ppix.js";import"./useDescription-DkUt8NOh.js";import"./ListKeyboardDelegate-Dutj400W.js";import"./PressResponder-BxS9bkby.js";import"./useLocalizedStringFormatter-CKeA94dv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DkUKv9Cj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C749xTmY.js";import"./x-C-qeqbMv.js";import"./createLucideIcon-Bz-p2P2k.js";import"./useLocalizedStringFormatter-DnVlYLjp.js";import"./Heading-Cqk24h5X.js";import"./info-Duz9g_te.js";import"./Popover-CH6d259w.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-x9imAslM.js";import"./DragAndDrop-C-mhJiDu.js";import"./inertValue-DfsQxsdt.js";import"./useListState-uCSLzH86.js";import"./Tag-DzDDqvag.js";import"./useHighlightSelectionDescription-D87k6349.js";import"./useUpdateEffect-BS41toWr.js";import"./useHasTabbableChild-BTgM6qns.js";import"./chevron-down-ChXFjQl7.js";import"./Button.module-Co5e5YHp.js";import"./check-BcM2i7YL.js";import"./useToggleState-07FiMtp1.js";import"./Virtualizer-DF99k8tI.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
