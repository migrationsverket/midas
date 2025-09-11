import{j as n}from"./iframe-msVlqhML.js";import{$ as j}from"./Form-Ca-S_w-p.js";import{G}from"./Grid-RSJLd80b.js";import{G as e}from"./GridItem-BTnZeOlh.js";import{T as r}from"./TextField-Dfcs81aL.js";import{S as I}from"./Select-DKn7utG3.js";import{B as a}from"./Button-CEthOg-l.js";import{R as g,a as b}from"./Radio-QXTuZsfK.js";import{C as h}from"./CheckboxGroup-CiYoHDQw.js";import{C as k}from"./Checkbox-SZ9_5J6t.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CU_Zz0Hf.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dgo8zAys.js";import"./useFocusRing-DslHgSdZ.js";import"./index-BjJyUuOt.js";import"./index-CtZ7qj5_.js";import"./TextFieldBase-D639rKls.js";import"./TextField-Ddn8C7QX.js";import"./FieldError-vDFKNnQd.js";import"./Text-C_qPqKMm.js";import"./Text-5D8om40W.js";import"./ListKeyboardDelegate-BTyCc1Hd.js";import"./SelectionManager-Cqwz0YOv.js";import"./useEvent-Bb3BaYHZ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-ZKX3SuJ-.js";import"./useDescription-CAEc6CSl.js";import"./useControlledState-B3T6283o.js";import"./Group-B-KKIc9y.js";import"./Input-Cmd7UZPG.js";import"./Hidden-nMwTbqTI.js";import"./Button-DTX0YFTS.js";import"./useLabels-Cg9UvaAJ.js";import"./useButton-CNbGrEGy.js";import"./useTextField-C3ZJ2vP6.js";import"./useField-05U9CGnj.js";import"./TextField.module-DjUItNl5.js";import"./Label-BWGhodPs.js";import"./Dialog-BEk2gNks.js";import"./RSPContexts-B769Jo9j.js";import"./OverlayArrow-DhVzQvJL.js";import"./useResizeObserver-BsNqT0RB.js";import"./Collection-BOugAWrE.js";import"./index-DEjMZ3Ze.js";import"./Separator-DXEqEuub.js";import"./PressResponder-CoScW2kH.js";import"./useLocalizedStringFormatter-BXUd3FRe.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B_ruNppm.js";import"./Dialog-B-SlP9XJ.js";import"./useLocalizedStringFormatter-DVRmcpsh.js";import"./x-N5fUvO1K.js";import"./createLucideIcon-DjsO8H4y.js";import"./Heading-UPVAiF81.js";import"./info-BYf4iVOe.js";import"./Tag-B30ZAm9f.js";import"./ListBox-C4VxKaL8.js";import"./DragAndDrop-RKcWSBEW.js";import"./inertValue-BOzIYnf3.js";import"./useListState-CNEsE5NL.js";import"./useHighlightSelectionDescription-BCwmMSPs.js";import"./useUpdateEffect-BytN_Ld2.js";import"./useHasTabbableChild-B73vEme0.js";import"./check-D5QdlH1w.js";import"./ListBoxSection-B7H3babD.js";import"./Virtualizer-C--W-TDA.js";import"./useObserveElement-Ci3FJp9T.js";import"./chevron-down-BJQvaXlv.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BYrxt_T3.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
