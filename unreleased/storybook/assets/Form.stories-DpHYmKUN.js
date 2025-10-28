import{j as n}from"./iframe-COt1ekzx.js";import{$ as j}from"./Form-O1GLKNVD.js";import{G}from"./Grid-CslONx4I.js";import{G as e}from"./GridItem-DVgPfaWs.js";import{T as r}from"./TextField-D0hOP9i_.js";import{S as I}from"./Select-CEz1y_47.js";import{B as a}from"./Button-BiSMSq4s.js";import{R as g,a as b}from"./Radio-DT4ih6wJ.js";import{C as h}from"./CheckboxGroup-BSk7qgB1.js";import{C as k}from"./Checkbox-DbHL5Cr6.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Cn2b5P-q.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Ih-8hrer.js";import"./useFocusRing-_SErBi5w.js";import"./index-DRODNoLC.js";import"./index-BVJdYrhl.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Cm69C-75.js";import"./TextField-BFt4yzOC.js";import"./FieldError-BNICeX4o.js";import"./Text-CCbRM0JC.js";import"./Text-uAk8p1Dg.js";import"./RSPContexts-CQqH11QN.js";import"./Group-DQLmtKsg.js";import"./Input-D7k4MsiN.js";import"./Hidden-CZjvOcHb.js";import"./Button-CfsQF6dl.js";import"./useLabels-DE0Q-j8Z.js";import"./useButton-CDyt2pb_.js";import"./useTextField-DZ0ROHTo.js";import"./useControlledState-D6W7Lfkr.js";import"./useField-5BVQ5A3v.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CerCNA0b.js";import"./Dialog-DrH3C6XE.js";import"./OverlayArrow-BS1Xai_G.js";import"./useResizeObserver-CP3-jaMc.js";import"./Collection-BwO1GPmj.js";import"./index-BGjD5yFx.js";import"./Separator-R33kWOI_.js";import"./SelectionManager-CL9qJSX4.js";import"./useEvent-CPUosnhf.js";import"./scrollIntoView-TzbW8zGj.js";import"./SelectionIndicator-DMBTTml-.js";import"./useDescription-DD4w4pWS.js";import"./ListKeyboardDelegate-CxAzbIgm.js";import"./PressResponder-ChqcCnFM.js";import"./useLocalizedStringFormatter-DPpXPQXZ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-BP8grX7u.js";import"./VisuallyHidden-C_bA3jgo.js";import"./useLocalizedStringFormatter-C3xwz4VR.js";import"./x-BYeSkF0c.js";import"./createLucideIcon-CW63wXLn.js";import"./Heading-C80ZbVQC.js";import"./info-CPRsyrDZ.js";import"./Popover-BRq8cIMV.js";import"./Tag-Bjvkifnx.js";import"./ListBox-C6OYgZ0o.js";import"./DragAndDrop-B-8fboej.js";import"./inertValue-BixFdidk.js";import"./useListState-Dzkvr5NO.js";import"./useHighlightSelectionDescription-DmXS6TdW.js";import"./useUpdateEffect-C1hJfWff.js";import"./useHasTabbableChild-DOo3ASfh.js";import"./check-BYTjwsYs.js";import"./ListBoxSection-CQlWrWQv.js";import"./Virtualizer-CYC1HNbU.js";import"./chevron-down-DKj1WkIS.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CychGiDk.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
