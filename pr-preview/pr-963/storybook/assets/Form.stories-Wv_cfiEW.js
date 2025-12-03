import{j as e}from"./iframe-CqwJW-jH.js";import{$ as c}from"./Form-DYT1rW1R.js";import{G as d}from"./Grid-DrFjpL7V.js";import{G as i}from"./GridItem-D5lyhQjw.js";import{T as t}from"./TextField-D4xH_y0o.js";import{S as l}from"./Select-MkYDb1LV.js";import{B as a}from"./Button-B0Mj2CMf.js";import{R as x,a as u}from"./Radio-BgFCBv3N.js";import{C as I}from"./CheckboxGroup-BJyyLUDS.js";import{C as G}from"./Checkbox-Crwcy2Bz.js";import{L as p}from"./ListBoxItem-dYIj1sAM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BjAcymq3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DApjsYBJ.js";import"./useFocusRing-s8rZZkXP.js";import"./index-CEUh_mhN.js";import"./index-Ck3K3FLZ.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-5GTDWIkh.js";import"./TextField-CbdYyszQ.js";import"./FieldError-DaAFNjv3.js";import"./Text-Bb3z90XN.js";import"./Text-BM7LeZYM.js";import"./RSPContexts-B9bfeA8n.js";import"./Group-DNKi2FCW.js";import"./Input-Buo8fx1e.js";import"./Hidden-CAXpsngw.js";import"./Button-DMS3IEls.js";import"./useLabels-B2L_aLjR.js";import"./useButton-CQ1blk8z.js";import"./useTextField-DSQrGkEY.js";import"./useControlledState-D4ov5J9e.js";import"./useField-CZGXvIYc.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CwpP5SJI.js";import"./Dialog-8xH5n5Xt.js";import"./OverlayArrow-B9TZriMe.js";import"./useResizeObserver--DYTMICB.js";import"./Collection-CJEB1uW6.js";import"./index-Dwxugr1R.js";import"./Separator-B8maWmEE.js";import"./SelectionManager-Ce6MfZqv.js";import"./useEvent-BWxOnnow.js";import"./scrollIntoView-Dk_3y03O.js";import"./SelectionIndicator-CsZ9cGqi.js";import"./useDescription-1D91jdoC.js";import"./ListKeyboardDelegate-DcuWd9Mu.js";import"./PressResponder-Cw_gk09z.js";import"./useLocalizedStringFormatter-DemKPo_M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bz9DRPyV.js";import"./VisuallyHidden-kxJd-Cll.js";import"./x-B_ppbZ4G.js";import"./createLucideIcon-CufIcqRQ.js";import"./useLocalizedStringFormatter-C2-HvklD.js";import"./Heading-BNyF6dE7.js";import"./info-NDf7usl3.js";import"./Popover-CTDz1koS.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B42-1EGk.js";import"./DragAndDrop-SV7CheK6.js";import"./inertValue-BMXMRdId.js";import"./useListState-DDQqqfQa.js";import"./Tag-BVCvAMS5.js";import"./useHighlightSelectionDescription-ZKyukqis.js";import"./useUpdateEffect-fUmv7qeJ.js";import"./useHasTabbableChild-BTtbH5RW.js";import"./chevron-down-CBL1eDzs.js";import"./Button.module-Co5e5YHp.js";import"./check-FQcm0qj0.js";import"./useToggleState-DbKI0Fzw.js";import"./Virtualizer-BpstpVf7.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
