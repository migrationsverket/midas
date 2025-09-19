import{j as n}from"./iframe-Or8otHCu.js";import{$ as j}from"./Form-GCjOtlyD.js";import{G}from"./Grid-BiXV-vcL.js";import{G as e}from"./GridItem-zkVlFpMQ.js";import{T as r}from"./TextField-S5_iLRMt.js";import{S as I}from"./Select-Dshzu0lO.js";import{B as a}from"./Button-D2LolN9p.js";import{R as g,a as b}from"./Radio-3GSeQCby.js";import{C as h}from"./CheckboxGroup--NhedntU.js";import{C as k}from"./Checkbox-tP_JrGnl.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Cxq36VMi.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DifOzkSw.js";import"./useFocusRing-BGb58ElY.js";import"./index-CIkzIznc.js";import"./index-C7pN8B2b.js";import"./TextFieldBase-BGef6y2i.js";import"./TextField-CkisQiKx.js";import"./FieldError-CJ-n9M7k.js";import"./Text-BJ-TJOIw.js";import"./Text-B-vlF-sb.js";import"./ListKeyboardDelegate-DXL3uhXV.js";import"./SelectionManager-CZRXDnM-.js";import"./useEvent-8sk1NiqP.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Ds5TFyKu.js";import"./useDescription-BgxNRiXJ.js";import"./useControlledState-CxIhWuaM.js";import"./Group-BtnfBJl2.js";import"./Input-BLcHkf94.js";import"./Hidden-DRbYmBNp.js";import"./Button-JjSgEqCl.js";import"./useLabels-CdNXAesv.js";import"./useButton-Xl1Jtn8a.js";import"./useTextField-h18zYJ33.js";import"./useField-BkSHabvb.js";import"./TextField.module-DjUItNl5.js";import"./Label-DHzj-VZH.js";import"./Dialog-DGa8zFMw.js";import"./RSPContexts-BlwpxbF_.js";import"./OverlayArrow-B-mXIGiR.js";import"./useResizeObserver-C8XnkWwC.js";import"./Collection-DTaNw3SY.js";import"./index-VchGAk4l.js";import"./Separator-B-WA2lSn.js";import"./PressResponder-CkMeXgzM.js";import"./useLocalizedStringFormatter-CjIU0By4.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BgVy09UH.js";import"./Dialog-BQ092E3P.js";import"./useLocalizedStringFormatter-CralPyeU.js";import"./x-Dj_ik8rd.js";import"./createLucideIcon-BM7Zv95O.js";import"./Heading-DzgP1GmZ.js";import"./info-D0__Rj5T.js";import"./Tag-DJKdaReg.js";import"./ListBox-t4m0WT0T.js";import"./DragAndDrop-BJAUTgc4.js";import"./inertValue-Dcn3dc6W.js";import"./useListState-DyCTvSRY.js";import"./useHighlightSelectionDescription-B8-JcqO_.js";import"./useUpdateEffect-ChLwBWNf.js";import"./useHasTabbableChild-Cyc2Cyl_.js";import"./check-AG3HXKEl.js";import"./ListBoxSection-CuqgWNYY.js";import"./Virtualizer-QMVXEIr8.js";import"./useObserveElement-DFOQioaX.js";import"./chevron-down-DrYd406K.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DArAjNkj.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
