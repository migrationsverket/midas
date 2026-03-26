import{j as e}from"./iframe-CmC6_uFn.js";import{c}from"./Form-BSRHL6AU.js";import{G as d}from"./Grid-Dv0j55OO.js";import{G as i}from"./GridItem-CPr-RTgn.js";import{a as x,R as u}from"./Radio-BReNgjKF.js";import{C as I}from"./CheckboxGroup-BQZbfO0m.js";import{C as G}from"./Checkbox-m73NCz3U.js";import{T as t}from"./TextField-Uwf_89_7.js";import{S as l}from"./Select-BFFA7etI.js";import{L as p}from"./ListBoxItem-B_7DQ3Qd.js";import{B as a}from"./Button-WgLWfZml.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CnXjVSj9.js";import"./utils-DpIGtToL.js";import"./clsx-B-dksMZM.js";import"./index-_SptB5IF.js";import"./index-Cq0yuKyu.js";import"./clsx-Ciqy0D92.js";import"./Group-D6oafy4R.js";import"./FieldError-B-ZQXEeM.js";import"./Text-bLb0hYqG.js";import"./Text-ChJGU_Xm.js";import"./Button-BfXSwHW0.js";import"./Hidden-Ci7T1bEi.js";import"./useLabel-CZd2jY9k.js";import"./useLabels-CAk5ShxF.js";import"./useButton-Dc8urwoW.js";import"./SelectionIndicator-C_ejA7zF.js";import"./useField-DSKyBuUi.js";import"./VisuallyHidden-DhqoAnIr.js";import"./useControlledState-x3Q8v9NC.js";import"./Label-B4OX4ojE.js";import"./Dialog-D3ALXbDh.js";import"./RSPContexts-CHkHxhdH.js";import"./OverlayArrow-B_8GOhMN.js";import"./useResizeObserver-5PwYRlCJ.js";import"./Collection-BGZfaZNZ.js";import"./index-FxwiPwmA.js";import"./Separator-j7qf1phg.js";import"./SelectionManager-0Zrx2NaO.js";import"./useEvent-lwkuKQG3.js";import"./scrollIntoView-AobHmSLH.js";import"./useDescription-BV7Lh5gS.js";import"./ListKeyboardDelegate-C47es2n9.js";import"./PressResponder-CgjGrZSG.js";import"./useLocalizedStringFormatter-fVU3OA8S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ccbo1JNi.js";import"./getScrollParent-TKe_y_ar.js";import"./x-BfnY6ZJn.js";import"./createLucideIcon-DG07A9xd.js";import"./useLocalizedStringFormatter-CHt1E_Fl.js";import"./Heading-CWx7pa9X.js";import"./info-BSvY6DXA.js";import"./Popover-DhIRyh1t.js";import"./check-C66u3zqq.js";import"./useToggleState-BivGYoU9.js";import"./TextFieldBase-BIDJ4ySO.js";import"./Input-3zQjtKDY.js";import"./useTextField-BbqiKWX0.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-2zejZKOb.js";import"./DragAndDrop-CoEAXofO.js";import"./inertValue-AijH15Fn.js";import"./useListState-Z6NeF1iC.js";import"./TagGroup-BkW5CAtu.js";import"./useHighlightSelectionDescription-C-kT9mXJ.js";import"./useUpdateEffect-CQPiULjW.js";import"./useHasTabbableChild-D9HOQgmM.js";import"./chevron-down-B0b12lhQ.js";import"./Virtualizer-BcARYQAU.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
