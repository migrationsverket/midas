import{j as e}from"./iframe-Bbu1_rOe.js";import{$ as c}from"./Form-BNX8v5Tt.js";import{G as d}from"./Grid-CK0BUusA.js";import{G as i}from"./GridItem-MyxvGrNa.js";import{T as t}from"./TextField-X8JY8z2w.js";import{S as l}from"./Select-Bf1E3zMA.js";import{B as a}from"./Button-DiLNuEQM.js";import{R as x,a as u}from"./Radio-BdlCDA6i.js";import{C as I}from"./CheckboxGroup-C_isTXi7.js";import{C as G}from"./Checkbox-B5Bdm_M6.js";import{L as p}from"./ListBoxItem-DyjBPz_h.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DzUH-LiJ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D_oZTZdh.js";import"./useFocusRing-DktvivXH.js";import"./index-Gy34tXsq.js";import"./index-BjrDVlup.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CGEszcab.js";import"./TextField-BEt2c27t.js";import"./FieldError-CkqjPv4F.js";import"./Text-I1JxsJhT.js";import"./Text-BWc7fTRi.js";import"./RSPContexts-DpwWeNGS.js";import"./Group-C8leh0gu.js";import"./Input-CI0aR-jA.js";import"./Hidden-DIc6BQrj.js";import"./Button-BfBJNH2a.js";import"./useLabels-Dh87fkX6.js";import"./useButton-qeywHX_w.js";import"./useTextField-OHXXnM36.js";import"./useControlledState-C-Y-9GQh.js";import"./useField-DFlr4vf-.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DoDLnRQs.js";import"./Dialog-BvFaO__U.js";import"./OverlayArrow-D9n0yWdO.js";import"./useResizeObserver-x1lsz8v9.js";import"./Collection-DNXXbKi1.js";import"./index-BYqhdPck.js";import"./Separator-CMgRjzDZ.js";import"./SelectionManager-DTdXD_WL.js";import"./useEvent-b0-AAngS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-1ZSNCFY8.js";import"./useDescription-CKADf4-J.js";import"./ListKeyboardDelegate-BHKEotvc.js";import"./PressResponder-DCJkoKxb.js";import"./useLocalizedStringFormatter-B-Hd1imC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ClJN9I7W.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bmla7vNF.js";import"./x-ByJYHghm.js";import"./createLucideIcon-QX8cppGT.js";import"./useLocalizedStringFormatter-7EqjOiW5.js";import"./Heading-6aaRBt_3.js";import"./info-CvR4PK9V.js";import"./Popover-PcKybAgC.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BhLg-bKF.js";import"./DragAndDrop-Dc91Ja6C.js";import"./inertValue-B8Xd1nSX.js";import"./useListState-BkydktXf.js";import"./Tag-CuiYcVPS.js";import"./useHighlightSelectionDescription-YDY2fqYu.js";import"./useUpdateEffect-fL8VrSmO.js";import"./useHasTabbableChild-CYxqm45r.js";import"./chevron-down-wCq52922.js";import"./Button.module-Co5e5YHp.js";import"./check-D8f66hRG.js";import"./useToggleState-F9G0PCuJ.js";import"./Virtualizer-C9SFadRH.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
