import{j as n}from"./iframe-CD-IIfnK.js";import{$ as j}from"./Form-Df7NYaqz.js";import{G}from"./Grid-a38yIYL5.js";import{G as e}from"./GridItem-OzUwzctB.js";import{T as r}from"./TextField-D-oZxtmJ.js";import{S as I}from"./Select-D4KhWaqy.js";import{B as a}from"./Button-Bh6sZxib.js";import{R as g,a as b}from"./Radio-TU1C1yjF.js";import{C as h}from"./CheckboxGroup-Pbh-AlZT.js";import{C as k}from"./Checkbox-gvyAz8gM.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CUvDBW54.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-INtES8Gv.js";import"./useFocusRing-erVSEtvh.js";import"./index-BIcPSdag.js";import"./index-DSQv2drZ.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-ChiT8LEg.js";import"./TextField-DfpxLTuH.js";import"./FieldError-CG0w_L0u.js";import"./Text-B45Q9E2i.js";import"./Text-CiT8ZZ-G.js";import"./RSPContexts-Br_9Jfvd.js";import"./Group-BE1q6Riv.js";import"./Input-BBFcrCvu.js";import"./Hidden-Vum_PisX.js";import"./Button-D_gbEXqW.js";import"./useLabels-SkfViOZd.js";import"./useButton-py1kuCGq.js";import"./useTextField-hVrGvqWa.js";import"./useControlledState-D8LuuRYE.js";import"./useField-CPtWaEdz.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DU9IGvUr.js";import"./Dialog-CyW5ITUz.js";import"./OverlayArrow-Dp47yB2N.js";import"./useResizeObserver-GwHfchKR.js";import"./Collection-BSWBsnVC.js";import"./index-B9U6qvzC.js";import"./Separator-DUQbK5Lw.js";import"./SelectionManager-jyOBSS2S.js";import"./useEvent-CPWGqx2i.js";import"./scrollIntoView-BQW8ww20.js";import"./SelectionIndicator-D5Om78zB.js";import"./useDescription-CzRRhaw7.js";import"./ListKeyboardDelegate-Dlkp45-9.js";import"./PressResponder-CfINaL9X.js";import"./useLocalizedStringFormatter-D2ZlPW2f.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-Bytov_A8.js";import"./VisuallyHidden-kB-3lwZu.js";import"./useLocalizedStringFormatter-B7cl5AnE.js";import"./x-C7fjqvSX.js";import"./createLucideIcon-FCeP3akY.js";import"./Heading-Y80qhP7R.js";import"./info-DQuwk9gp.js";import"./Popover-DVggWY96.js";import"./Tag-W5KladA-.js";import"./ListBox-DKuu4AUl.js";import"./DragAndDrop-C2en4-92.js";import"./inertValue-BQc-rhcz.js";import"./useListState-C_QeSQeX.js";import"./useHighlightSelectionDescription-aEa91x2f.js";import"./useUpdateEffect-By7v3ayn.js";import"./useHasTabbableChild-DoUSr8VE.js";import"./check-DeuNUfqA.js";import"./ListBoxSection-DLgIek3s.js";import"./Virtualizer-BH31B8RH.js";import"./chevron-down-cjXbSvKK.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-C-kbr7kx.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
