import{j as e}from"./iframe-BUzSQYPC.js";import{$ as c}from"./Form-CGQpIRs2.js";import{G as d}from"./Grid-DWYPDX9w.js";import{G as i}from"./GridItem-BjwNslRf.js";import{T as t}from"./TextField-BEXPWfOS.js";import{S as l}from"./Select-BSmmjqoD.js";import{B as a}from"./Button-BNm8f_W9.js";import{R as x,a as u}from"./Radio-v40LpOEZ.js";import{C as I}from"./CheckboxGroup-DbBI2J8g.js";import{C as G}from"./Checkbox-BKLJpkuR.js";import{L as p}from"./ListBoxItem-BdO0n-cC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Btzcj3N0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-De4Eb6_6.js";import"./useFocusRing-YU2uIjvV.js";import"./index-GFhdUWhY.js";import"./index-Co6p1tFH.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-vOvP5Qo6.js";import"./TextField-Dk0Lc96h.js";import"./FieldError-Bhel02KK.js";import"./Text-Bd7HxiMM.js";import"./Text-Bj5T73Aj.js";import"./RSPContexts-Cz2k_HNM.js";import"./Group-a5LyW-d1.js";import"./Input-IpKiaRbI.js";import"./Hidden-BnEE9Gsk.js";import"./Button-OR1vhKiL.js";import"./useLabels-cBc_DTaL.js";import"./useButton-DY9W__1v.js";import"./useTextField-CLCRB6R6.js";import"./useControlledState-DRPCclAj.js";import"./useField-DI1Z0UEr.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DVAz7ns9.js";import"./Dialog-9nXcosHR.js";import"./OverlayArrow-B544f2HB.js";import"./useResizeObserver-BauP1qVp.js";import"./Collection-BdzN0GFu.js";import"./index-CLJhNb_Q.js";import"./Separator-Bb8iAwHX.js";import"./SelectionManager-Cysrbh2q.js";import"./useEvent-Bdun3CtA.js";import"./scrollIntoView-DVdSjfTj.js";import"./SelectionIndicator-BNE4DlHv.js";import"./useDescription-DUYplGlv.js";import"./ListKeyboardDelegate-BkEk9pDN.js";import"./PressResponder-DNmbnAh3.js";import"./useLocalizedStringFormatter-Df3fxnIS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BETkQzAi.js";import"./VisuallyHidden-DxzlT-nw.js";import"./x-m8OdfwS0.js";import"./createLucideIcon-DHyF6-IS.js";import"./useLocalizedStringFormatter-DGyxLrTg.js";import"./Heading-BAJI1xjf.js";import"./info-CrIUTLUS.js";import"./Popover-BLQSaase.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bkc9DILO.js";import"./DragAndDrop-Bcd2F4VF.js";import"./inertValue-phnJPM_4.js";import"./useListState-Bgz2uzbV.js";import"./Tag-COrHTLC-.js";import"./useHighlightSelectionDescription-CQ2wx9Jt.js";import"./useUpdateEffect-DNDlFwAF.js";import"./useHasTabbableChild-CX3LU2ve.js";import"./chevron-down-BSermWxq.js";import"./Button.module-Co5e5YHp.js";import"./check-krA3es4Q.js";import"./useToggleState-PMhKKL5h.js";import"./Virtualizer-tGAc62Qo.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
