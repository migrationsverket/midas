import{j as e}from"./iframe-TjYTyBIA.js";import{$ as c}from"./Form-GSJN0Uyu.js";import{G as d}from"./Grid-EAE-lr4H.js";import{G as i}from"./GridItem-BbV_9bgc.js";import{T as t}from"./TextField-F2yX27HS.js";import{S as l}from"./Select-DX6VcUvN.js";import{B as a}from"./Button-Lepv9VS_.js";import{R as x,a as u}from"./Radio-BKeph62m.js";import{C as I}from"./CheckboxGroup-5YBvKigB.js";import{C as G}from"./Checkbox-CH4woI9t.js";import{L as p}from"./ListBoxItem-4-0Kbgs5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B2jU_PXd.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CeJWDr9L.js";import"./useFocusRing-2DlQQnAW.js";import"./index-BzxihWEi.js";import"./index-D9BjRmkk.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DXxN-j3m.js";import"./TextField-BU6RD7X7.js";import"./FieldError-Bc9pveKo.js";import"./Text-BkOzDRnY.js";import"./Text-C9TF991Y.js";import"./RSPContexts-IGt6m-sM.js";import"./Group-2K8946t4.js";import"./Input-dvizKyGi.js";import"./Hidden-Bk8kC44C.js";import"./Button-DfGK-ytd.js";import"./useLabels-BFnK5R4R.js";import"./useButton-EM8J5NvE.js";import"./useTextField-5p42HyBq.js";import"./useControlledState-DRcN3zts.js";import"./useField-DJHv4sS4.js";import"./TextField.module-1fNSVGjT.js";import"./Label-Bc0ITZCg.js";import"./Dialog-3snVtcBm.js";import"./OverlayArrow-VYU31Vg3.js";import"./useResizeObserver-Bp3XTfau.js";import"./Collection-QZG0Os4g.js";import"./index-DnZT8snr.js";import"./Separator-Br4fwH0A.js";import"./SelectionManager-DTo-Zj2V.js";import"./useEvent-onuK9vqA.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C0rBB3SQ.js";import"./useDescription-Bc-rlWkY.js";import"./ListKeyboardDelegate-R82ob_wj.js";import"./PressResponder-B9ZcG7i4.js";import"./useLocalizedStringFormatter-BthcVXxR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4-yEZx5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bgu6hP_b.js";import"./x-BMgB1TfF.js";import"./createLucideIcon-CEDLvmmT.js";import"./useLocalizedStringFormatter-C3ettQfp.js";import"./Heading-CXTRw5XU.js";import"./info-DcNPWdVu.js";import"./Popover-DlkEn3St.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DQjWN2Dp.js";import"./DragAndDrop-DmA7TL7W.js";import"./inertValue-C3jF3_uk.js";import"./useListState-DLwJXLNF.js";import"./Tag-B0V8b6Wr.js";import"./useHighlightSelectionDescription-Co91bg-A.js";import"./useUpdateEffect-CdFC-PM4.js";import"./useHasTabbableChild-CpegDWOA.js";import"./chevron-down-2iYxKDGL.js";import"./Button.module-Co5e5YHp.js";import"./check-CNyKNF5U.js";import"./useToggleState-Dd8bdgzc.js";import"./Virtualizer-DHaX3JyZ.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
