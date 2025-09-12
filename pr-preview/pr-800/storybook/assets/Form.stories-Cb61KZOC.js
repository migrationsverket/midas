import{j as n}from"./iframe-C2I2IXAb.js";import{$ as j}from"./Form-DVWelywm.js";import{G}from"./Grid-sEFZ3y4V.js";import{G as e}from"./GridItem-CvaiLnMJ.js";import{T as r}from"./TextField-D_H7N7A9.js";import{S as I}from"./Select-BV09GG28.js";import{B as a}from"./Button-DxF7NtrV.js";import{R as g,a as b}from"./Radio-BVUY6qEZ.js";import{C as h}from"./CheckboxGroup-DCUOJpUF.js";import{C as k}from"./Checkbox-DJRvRRFH.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BKJcEba4.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-OeFCWUVr.js";import"./useFocusRing-Bnlf4ZU_.js";import"./index-Brg-xNUA.js";import"./index-0oHbsqCH.js";import"./TextFieldBase-DoNgoi8D.js";import"./TextField-DuACZyi8.js";import"./FieldError-BT6l8YcL.js";import"./Text-CVegTv8d.js";import"./Text-BaWHYg13.js";import"./ListKeyboardDelegate-BWqEPee0.js";import"./SelectionManager-DL8rUktV.js";import"./useEvent-C26IfLn2.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Da2QSG2u.js";import"./useDescription-CxIIfG81.js";import"./useControlledState-Cv-DkPWb.js";import"./Group-BTjPT40n.js";import"./Input-BGbiC9UC.js";import"./Hidden-Bsb3SYHJ.js";import"./Button-Cd6r4fAI.js";import"./useLabels-CAg_jKMU.js";import"./useButton-ZRkE-b7U.js";import"./useTextField-BVIdq4Gl.js";import"./useField-Bxs0kETM.js";import"./TextField.module-DjUItNl5.js";import"./Label-BsVfwhBQ.js";import"./Dialog-OST8g0nk.js";import"./RSPContexts-CQB16PDs.js";import"./OverlayArrow-DJ__5g2K.js";import"./useResizeObserver-DRCEM-6s.js";import"./Collection-DGDYlX9v.js";import"./index-PfKgW19v.js";import"./Separator-DeebUBZR.js";import"./PressResponder-DgoCzm7F.js";import"./useLocalizedStringFormatter-Be5nvw90.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BsDzWBqM.js";import"./Dialog-CtYa_cJl.js";import"./useLocalizedStringFormatter-sJ-hAmBH.js";import"./x-PfpuJ2Gm.js";import"./createLucideIcon-DF5KEBgY.js";import"./Heading-CqDsS_gQ.js";import"./info-Btgqy6O1.js";import"./Tag-unW43kFJ.js";import"./ListBox-BjM45Wyd.js";import"./DragAndDrop-CQiHe_3t.js";import"./inertValue-C-Hgg4kY.js";import"./useListState-BbXTdy2V.js";import"./useHighlightSelectionDescription-Bch0M2ZA.js";import"./useUpdateEffect-DvJx6NUC.js";import"./useHasTabbableChild-C-D13pIi.js";import"./check-CWwXzK9I.js";import"./ListBoxSection-BoNCWWw3.js";import"./Virtualizer-BPucxuq4.js";import"./useObserveElement-Cy_7xonu.js";import"./chevron-down-B9pPLhua.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-C7QrmNHU.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
