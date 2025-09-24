import{j as n}from"./iframe-C5AmqOfI.js";import{$ as j}from"./Form-C1ZydCL4.js";import{G}from"./Grid-Cg7TSzW5.js";import{G as e}from"./GridItem-US7zDfoX.js";import{T as r}from"./TextField-CN0owb9U.js";import{S as I}from"./Select-Da66N-gO.js";import{B as a}from"./Button-D6PTG4YJ.js";import{R as g,a as b}from"./Radio-Bq9hbcW4.js";import{C as h}from"./CheckboxGroup-CIk6297b.js";import{C as k}from"./Checkbox-BaYPJWij.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CmtxAEIy.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CKdAkCZO.js";import"./useFocusRing-c2yL1CMC.js";import"./index-DXJeV7EG.js";import"./index-GpKMYlfZ.js";import"./TextFieldBase-GmE2xyZB.js";import"./TextField-Bn7svDjD.js";import"./FieldError-DZR-8CsH.js";import"./Text-KyE7mIi9.js";import"./Text-DO2FemJi.js";import"./ListKeyboardDelegate-DLBBuFpK.js";import"./SelectionManager-D5vyzfog.js";import"./useEvent-BhEe3ZlT.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CjXwAII_.js";import"./useDescription-BF5uCDCe.js";import"./useControlledState-BSa1Bnqo.js";import"./Group-ClTfD3Z4.js";import"./Input-CZ2b0Q88.js";import"./Hidden-Dag0Yj4a.js";import"./Button-Bvnet1gp.js";import"./useLabels-BdNTtdLX.js";import"./useButton-CtinvHzA.js";import"./useTextField-CKv3fxgO.js";import"./useField-Dump1Sp2.js";import"./TextField.module-DjUItNl5.js";import"./Label-Du8gQMIY.js";import"./Dialog-BoGoD9rc.js";import"./RSPContexts-q2aIC0yX.js";import"./OverlayArrow-BGSsXyli.js";import"./useResizeObserver-C_gA0mDP.js";import"./Collection-iXHwiIA7.js";import"./index-VWtUDCcy.js";import"./Separator-CKL9BeMK.js";import"./PressResponder-Du5DjCXz.js";import"./useLocalizedStringFormatter-Djhxhibm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DQerSziA.js";import"./Dialog-DwR0oZht.js";import"./useLocalizedStringFormatter-CqkllhWL.js";import"./x-BSNWmPrO.js";import"./createLucideIcon-CI5j_4sd.js";import"./Heading-ChJd15f4.js";import"./info-Bf5qG6NH.js";import"./Tag-DhSAWwXO.js";import"./ListBox-jhMvCDcS.js";import"./DragAndDrop-MoeArZdj.js";import"./inertValue-GnU5H9Ce.js";import"./useListState-DME3W3PE.js";import"./useHighlightSelectionDescription-BE5BVfu-.js";import"./useUpdateEffect-pxadrGC4.js";import"./useHasTabbableChild-Cm84QndW.js";import"./check-5te-D0Iu.js";import"./ListBoxSection-Ayh7L7ES.js";import"./Virtualizer-LKbzlPyy.js";import"./useObserveElement-CmO_45c9.js";import"./chevron-down-DqYlL5Ig.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-YUwI7goR.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
